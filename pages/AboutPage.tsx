import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const teamMembers = [
  { name: 'Rutvik Jathar', role: 'Founder', image: './media/Rutvik.jpg' },
  { name: 'Devesh Pathak', role: 'Co-Founder', image: './media/Devesh.jpeg' },
];

const AboutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:deveshpathak112@gmail.com,rutvikjathar75@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold font-rajdhani tracking-tighter">Our Mission</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            We believe that software development should be a seamless, creative, and collaborative process. Devium was born from the desire to eliminate friction in the developer workflow, enabling teams to build amazing products faster and more efficiently than ever before. Our mission is to empower developers with tools that are not just powerful, but a joy to use.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-center mb-16">Meet the Team</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-border object-cover" />
                <h3 className="text-xl font-bold font-rajdhani text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-card border rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold font-rajdhani mb-4 text-center">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 text-center">
            Have a question or want to work with us? Drop us a line.
          </p>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;