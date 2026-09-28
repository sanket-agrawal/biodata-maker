import { ShieldCheck, Zap, Lock, CreditCard } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: '100% Private & Secure',
      desc: 'Your data is never stored or shared',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
    },
    {
      icon: Zap,
      title: 'Instant Download',
      desc: 'PDF, PNG & JPG in seconds',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
    {
      icon: Lock,
      title: 'Razorpay Secure',
      desc: 'PCI-DSS compliant payments',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
    },
    {
      icon: CreditCard,
      title: 'Money-Back Guarantee',
      desc: 'Full refund within 7 days',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
    },
  ];

  return (
    <section className="py-10 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-4 rounded-xl ${badge.bg} border ${badge.border} transition hover:shadow-md`}
            >
              <badge.icon className={`w-7 h-7 ${badge.color} mb-2`} />
              <h4 className="font-bold text-gray-900 text-sm">{badge.title}</h4>
              <p className="text-xs text-gray-600 mt-0.5">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}