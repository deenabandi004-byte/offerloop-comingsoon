import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
});

type FormValues = z.infer<typeof schema>;

export default function WaitlistModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyAvi_vLa-Xg44296lhLzVJXU6X2_x557h_rAisssy3Qqcm-QWufdEL1zigNYsgfhvU/exec",
        {
          method: "POST",
          // text/plain avoids CORS preflight on Apps Script
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify(values),
        }
      );
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Failed to join waitlist");
      toast({ title: "You're in!", description: "We’ll email you when we launch." });
      form.reset();
      setOpen(false);
    } catch (e: any) {
      toast({ title: "Submission failed", description: e.message || "Try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="hover-scale">Join the waitlist</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-2xl border-0 bg-gradient-to-b from-slate-900/90 to-slate-900/60 backdrop-blur shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">Join the Waitlist</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-200">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field}
                      className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-400" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-200">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@email.com" {...field}
                      className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-400" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting ? "Submitting..." : "Notify me"}
            </Button>
            <p className="text-xs text-slate-400 text-center">No spam. Unsubscribe anytime.</p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
