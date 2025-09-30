import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Textarea, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { Mail, Phone, User, MessageSquare, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card variant="elevated" padding="lg" className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">Send us a message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>

        {/* Chatbot Notice */}
        <div className="mt-4 p-4 bg-accent-subtle border border-accent/20 rounded-xl flex items-start gap-3">
          <div className="w-10 h-10 bg-white border border-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <Bot size={20} className="text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-neutral-700 font-medium mb-1">
              Quick Question?
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              For general enquiries and FAQs, try our <span className="font-semibold text-accent">AI chatbot</span> in the bottom right corner for instant answers.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            {...register('name')}
            label="Full Name"
            placeholder="John Smith"
            icon={<User size={20} />}
            error={errors.name?.message}
          />

          <Input
            {...register('email')}
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            icon={<Mail size={20} />}
            error={errors.email?.message}
          />

          <Input
            {...register('phone')}
            label="Phone Number"
            type="tel"
            placeholder="+61 4XX XXX XXX"
            icon={<Phone size={20} />}
            error={errors.phone?.message}
          />

          <Input
            {...register('subject')}
            label="Subject"
            placeholder="What can we help you with?"
            icon={<MessageSquare size={20} />}
            error={errors.subject?.message}
          />

          <Textarea
            {...register('message')}
            label="Your Message"
            placeholder="Please provide details about your enquiry..."
            rows={6}
            error={errors.message?.message}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold shadow-md-subtle hover:shadow-lg-subtle hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
            >
              ✓ Message sent successfully! We'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center"
            >
              ✗ Something went wrong. Please try again or call us directly at 02 9267 6533.
            </motion.div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;