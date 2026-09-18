'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fileLabel, setFileLabel] = useState('Click to upload an inspiration photo');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong sending your enquiry.');
      }

      setStatus('success');
      form.reset();
      setFileLabel('Click to upload an inspiration photo');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong sending your enquiry.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-9 px-3">
        <h3 className="mb-3 font-serif text-2xl">Thank you!</h3>
        <p className="text-ink-soft">
          Your enquiry has been sent. We usually reply within 2 business days — if it&apos;s urgent, email us
          directly at{' '}
          <a href="mailto:hello@jezzbakes.co.uk" className="underline">
            hello@jezzbakes.co.uk
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="bg-white border border-line p-12 max-[900px]:p-8" onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-[22px] mb-[22px] max-[560px]:grid-cols-1">
        <Field label="Your name">
          <input id="f-name" name="name" type="text" required className="field" />
        </Field>
        <Field label="Email or phone">
          <input id="f-contact" name="contact" type="text" required className="field" />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-[22px] mb-[22px] max-[560px]:grid-cols-1">
        <Field label="Celebration date">
          <input id="f-date" name="date" type="date" className="field" />
        </Field>
        <Field label="Cake type">
          <select id="f-type" name="type" required className="field">
            <option value="">Select one</option>
            <option>Wedding Cake</option>
            <option>Birthday Cake</option>
            <option>Celebration Cake</option>
            <option>Other</option>
          </select>
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-[22px] mb-[22px] max-[560px]:grid-cols-1">
        <Field label="Number of guests">
          <input id="f-guests" name="guests" type="number" min={1} className="field" />
        </Field>
        <Field label="Flavour preference">
          <input id="f-flavour" name="flavour" type="text" placeholder="e.g. lemon, chocolate" className="field" />
        </Field>
      </div>
      <div className="mb-5">
        <Field label="Budget" optional>
          <input id="f-budget" name="budget" type="text" placeholder="e.g. £250–£350" className="field" />
        </Field>
      </div>
      <div className="mb-5">
        <Field label="Tell us about your cake ideas">
          <textarea
            id="f-ideas"
            name="ideas"
            placeholder="Colours, theme, inspiration, anything you have in mind..."
            className="field min-h-[120px] resize-y"
          />
        </Field>
      </div>
      <div className="mb-2">
        <label className="text-[0.82rem] text-ink-soft block mb-[9px]">
          Inspiration image <span className="opacity-60 italic">(optional)</span>
        </label>
        <div className="border border-dashed border-line-strong p-[26px] text-center cursor-pointer relative hover:border-ink">
          <input
            type="file"
            name="inspiration"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => setFileLabel(e.target.files?.length ? e.target.files[0].name : 'Click to upload an inspiration photo')}
          />
          <div className="text-[0.88rem] text-ink-soft">{fileLabel}</div>
          <div className="text-[0.78rem] text-ink-faint mt-[5px]">JPG or PNG, up to 8MB</div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-full mt-[14px]" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
      </button>
      {status === 'error' && (
        <p className="text-[0.82rem] mt-4 text-red-700">{errorMessage}</p>
      )}
      <p className="text-[0.82rem] text-ink-faint mt-5">
        Submitting sends your enquiry straight to Jezz Bakes. We usually reply within 2 business days.
      </p>
    </form>
  );
}

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  const id = (children as React.ReactElement)?.props?.id as string | undefined;
  return (
    <div className="flex flex-col gap-[9px]">
      <label htmlFor={id} className="text-[0.82rem] text-ink-soft">
        {label} {optional && <span className="opacity-60 italic">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
