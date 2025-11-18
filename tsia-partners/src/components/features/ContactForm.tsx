import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Textarea } from '@/components/ui';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
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
      const response = await fetch('https://formspree.io/f/mqankvpw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full bg-white rounded-3xl shadow-md-subtle border border-neutral-200/70 p-10 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold text-neutral-900 mb-3">
          Send us a message
        </h3>
        <p className="text-neutral-600 mb-10">
          We’ll get back to you within 24 hours — usually much sooner.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          <div className="grid md:grid-cols-2 gap-7">
            <Input
              {...register('name')}
              label="Full Name"
              placeholder="John Smith"
              icon={<User size={20} className="text-neutral-500" />}
              error={errors.name?.message}
            />
            <Input
              {...register('email')}
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              icon={<Mail size={20} className="text-neutral-500" />}
              error={errors.email?.message}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            <Input
              {...register('phone')}
              label="Phone Number"
              type="tel"
              placeholder="04XX XXX XXX"
              icon={<Phone size={20} className="text-neutral-500" />}
              error={errors.phone?.message}
            />
            <Input
              {...register('subject')}
              label="Subject"
              placeholder="e.g. Tax planning, SMSF setup..."
              icon={<MessageSquare size={20} className="text-neutral-500" />}
              error={errors.subject?.message}
            />
          </div>

          <Textarea
            {...register('message')}
            label="Your Message"
            placeholder="Tell us how we can help..."
            rows={6}
            error={errors.message?.message}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-accent-500 border-2 border-accent-500 hover:bg-accent-500 hover:text-white px-10 py-6 rounded-full font-semibold text-lg shadow-md-subtle hover:shadow-xl-subtle hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>

          {/* Success / Error */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-center font-medium"
            >
              Message sent! We’ll be in touch very soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-center font-medium"
            >
              Something went wrong. Please try again or call us on{' '}
              <a href="tel:0292676533" className="underline font-bold">02 9267 6533</a>.
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;