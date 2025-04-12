"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Laptop,
  Code,
  Database,
  Shield,
  Smartphone,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { useState } from "react"
import StructuredData from "@/components/structured-data"

export default function ComputerAcademy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <StructuredData />
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Laptop className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Paul Emery,</span> <span className="text-xl"> Maxwell Certified Leadership Coach</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Mission
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              Values
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Vision
            </Link>
                        <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Strategy
            </Link>
                        <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Non-Negotiables
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-background md:hidden">
          <nav className="container flex flex-col gap-4 p-4">
            <Link href="#courses" className="flex items-center justify-between border-b py-4" onClick={toggleMenu}>
              <span className="text-lg font-medium">Mission</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="#about" className="flex items-center justify-between border-b py-4" onClick={toggleMenu}>
              <span className="text-lg font-medium">Values</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="#testimonials" className="flex items-center justify-between border-b py-4" onClick={toggleMenu}>
              <span className="text-lg font-medium">Vision</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="#testimonials" className="flex items-center justify-between border-b py-4" onClick={toggleMenu}>
              <span className="text-lg font-medium">Strategy</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
              <Link href="#testimonials" className="flex items-center justify-between border-b py-4" onClick={toggleMenu}>
              <span className="text-lg font-medium">Non-Negotiables</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="#contact" className="flex items-center justify-between border-b py-4" onClick={toggleMenu}>
              <span className="text-lg font-medium">Contact</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
<section className="relative min-h-[500px]">
  {/* Background image */}
  <div className="absolute inset-0 -z-10 h-full w-full">
    <Image
      src="/media/lightning.jpg" 
      alt="Lightning over ocean"
      fill
      className="object-cover object-bottom"
      priority
    />
  </div>
  
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10" />
  
  {/* Content */}
  <div className="relative container flex flex-col items-center justify-center px-4 py-20 md:py-32 text-center z-20">
    <h1 className="text-4xl font-bold tracking-tight text-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-6xl lg:text-7xl">
      Connect Your Schedule to Purpose
    </h1>
<p className="mt-6 max-w-3xl text-lg text-white font-semibold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-xl" style={{color: 'white !important', WebkitTextFillColor: 'white', textShadow: '0 0 0 white'}}>
  Discover Your Mission | Identify Your Values | Determine Your Vision
</p>
<p className="mt-6 max-w-3xl text-lg text-white font-semibold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-xl" style={{color: 'white !important', WebkitTextFillColor: 'white', textShadow: '0 0 0 white'}}>
  Connect Your Strategy | Lead Your Legacy
</p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
  {/* First button */}
  <a 
    href="#courses" 
    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
  >
    Read Testimonials
  </a>
  
  {/* Second button */}
  <a 
    href="#contact" 
    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white text-black hover:bg-accent hover:text-accent-foreground h-11 px-8"
    style={{backgroundColor: 'white', color: 'black'}}
  >
    Request Information
  </a>
</div>
  </div>
</section>

        {/* Stats Section */}
        <section className="border-y bg-muted/50">
          <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-primary">_ Years</span>
              <span className="mt-2 text-sm text-muted-foreground">Sr World Class Operations Manager <p>driving efficiency in international industry</p></span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-primary">_ Years</span>
              <span className="mt-2 text-sm text-muted-foreground">Lean Six Sigma Blackbelt</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-primary">__</span>
              <span className="mt-2 text-sm text-muted-foreground">Training seminars<p>in 4 countries</p></span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-primary">98%</span>
              <span className="mt-2 text-sm text-muted-foreground">Report satisfaction</span>
            </div>
          </div>
        </section>

{/* CTA Section */}
<section className="py-16 md:py-24 bg-primary text-primary-foreground">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Image on the left */}
      <div className="flex justify-center md:justify-start">
        <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden bg-primary-foreground/10">
          {/* Replace this with your actual image */}
          <img 
            src="/media/HS2.jpg" 
            alt="Professional coaching" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content on the right */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Where do you want to be in six months?  
        </h2>
        <p className="mt-4 md:text-lg">
          I add unforgettable value with powerful coaching. 
        </p>
        <p className="mt-4 md:text-lg">
          Join me for focused learning and courageous growth.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Button size="lg" variant="secondary">
            Schedule a Conversation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            Brochure
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Courses Section */}
        <section id="courses" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What I offer</h2>
              <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                Come Discover...
              </p>
            </div>

            <Tabs defaultValue="diploma" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="diploma">Individual</TabsTrigger>
                  <TabsTrigger value="data">Business</TabsTrigger>
                  <TabsTrigger value="cybersecurity">Eldercare</TabsTrigger>
                  <TabsTrigger value="programming">Data Driven</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="diploma" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CourseCard
                    title="One on one coaching"
                    description="Comprehensive training."
                    duration="3 months"
                    level="All Levels"
                    icon={<Code className="h-10 w-10 text-primary" />}
                    image="/media/Oakley.jpg"
                  />
                  <CourseCard
                    title="Small business consultation"
                    description="Learn the core concepts."
                    duration="3 days"
                    level="All Levels"
                    icon={<Code className="h-10 w-10 text-primary" />}
                    image="/media/Piper.jpg"
                  />
                  <CourseCard
                    title="What do I really want? A six-part course"
                    description="Dig deep into what you really want out of life."
                    duration="3 months"
                    level="All Levels"
                    icon={<Code className="h-10 w-10 text-primary" />}
                    image="/media/Oakley.jpg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="data" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CourseCard
                    title="Shake it up Bootcamp"
                    description="All the stuff you know you should do? I'll help you do it."
                    duration="20 weeks"
                    level="Intermediate"
                    icon={<Database className="h-10 w-10 text-primary" />}
                    image="/media/Piper.jpg"
                  />
                  <CourseCard
                    title="Preparing for Elder Care"
                    description="How to protect your values while making room for this important role."
                    duration="Until they pass"
                    level="Intermediate to Advanced"
                    icon={<Database className="h-10 w-10 text-primary" />}
                    image="/media/Oakley.jpg"
                  />
                  <CourseCard
                    title="Assemble a mentor"
                    description="Book group where we share inspiring books as we build our value-set."
                    duration="Weekly"
                    level="Intermediate"
                    icon={<Database className="h-10 w-10 text-primary" />}
                    image="/media/Piper.jpg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="cybersecurity" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CourseCard
                    title="McWhat? Learn to read the menu"
                    description="How what you order at McDonalds says a lot about whether or not you'll be promoted."
                    duration="12 weeks"
                    level="Beginner to Intermediate"
                    icon={<Shield className="h-10 w-10 text-primary" />}
                    image="/media/Oakley.jpg"
                  />
                  <CourseCard
                    title="LifeHacking"
                    description="Small things can add big efficiency."
                    duration="16 weeks"
                    level="Intermediate"
                    icon={<Shield className="h-10 w-10 text-primary" />}
                    image="/media/Piper.jpg"
                  />
                  <CourseCard
                    title="Garage Sales as a path to marital clarity"
                    description="Chain garage sales as a marital test. You'll know after three sales."
                    duration="14 weeks"
                    level="Intermediate to Advanced"
                    icon={<Shield className="h-10 w-10 text-primary" />}
                    image="/media/Oakley.jpg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="programming" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CourseCard
                    title="What the...?"
                    description="Talk about idiotic stuff people do."
                    duration="14 weeks"
                    level="Intermediate"
                    icon={<Smartphone className="h-10 w-10 text-primary" />}
                    image="/media/Piper.jpg"
                  />
                  <CourseCard
                    title="Why do I take pills?"
                    description="We review your phone apps and their effect on your drug use."
                    duration="14 weeks"
                    level="Intermediate"
                    icon={<Smartphone className="h-10 w-10 text-primary" />}
                    image="/media/Oakley.jpg"
                  />
                  <CourseCard
                    title="Anger Management"
                    description="Dial it down, buddy."
                    duration="12 weeks"
                    level="Intermediate"
                    icon={<Smartphone className="h-10 w-10 text-primary" />}
                    image="/media/Piper.jpg"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Button size="lg">Let's Design Together!</Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
                <p className="mt-4 text-muted-foreground">
                  Paragraph
                </p>
                <p className="mt-4 text-muted-foreground">
                  My mission is to ....
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">About my certifications</h3>
                      <p className="text-sm text-muted-foreground">
                        I've.....
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Life-Based Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn from right where you are...
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Support and Community</h3>
                      <p className="text-sm text-muted-foreground">
                        Stay in touch in our online forum as well as discounts to future events!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Flexible Learning Options</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose how you interact with the material and set your own pace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/media/HS1.png"
                  alt="Students in a computer lab"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Testimonials</h2>
              <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                Hear from others...
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                name="Sarah Johnson"
                role="Equestrian Surgeon"
                image="/placeholder.svg?height=100&width=100"
                quote="Much of my life is the same, but Paul helped me pick the lock. By using values as a metric for my scheduling I greatly increased my efficiency. I haven't missed any of my son's baseball games this year, AND I've been able to take on more at work."
                course="Book and seminar"
              />
              <TestimonialCard
                name="Karan khushwaha"
                role="CEO, DCA Siphoning -- We suck what you blow."
                image="/placeholder.svg?height=100&width=100"
                quote="Paul helped me realize that for years I was unhappy in my job not becuase of anything external, but because I hadn't given a voice to my heart's true priorities."
                course="Weekly mentorship"
              />
              <TestimonialCard
                name="Bill Nikum"
                role="Golf Pro at Needham Golf Course and Small Engine Repair"
                image="/placeholder.svg?height=100&width=100"
                quote="After years of golfing I lost my swing. Paul helped me get it back. Now I'm more light and effective at work to the point where I can help Joe clean a carbeurator or two."
                course="In person coaching"
              />
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground">
                  Have questions? Contact me today and I'll get back to you personally.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Me</h3>
                      <p className="text-sm text-muted-foreground">Paulibear3@icloud.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Me</h3>
                      <p className="text-sm text-muted-foreground">480-271-1100</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Request more information</h3>
                      <p className="text-sm text-muted-foreground">
                        Use my fill-in form to inquire about anything. I'm happy to answer your questions.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="gourav" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="gour" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="gourav@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="9111091460" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-medium">
                      Area of interest
                    </label>
                    <select
                      id="program"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a program</option>
                      <option value="dca">Diploma in Computer Applications</option>
                      <option value="data-science">Data Science Bootcamp</option>
                      <option value="cybersecurity">Cybersecurity Fundamentals</option>
                      <option value="mobile-dev">Basic Computer</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your goals..." className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Laptop className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Certified Maxwell Leadership Coach</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering the next generation of professionals through quality education and practical training.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Program1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Program2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Program3
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Program4
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Program5
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    My Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Free Workshops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PaulEmery at Emery Brothers, LLC. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CourseCard({ title, description, duration, level, icon, image }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-start gap-3">
          {icon}
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Duration</span>
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Level</span>
            <span className="font-medium">{level}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}

function TestimonialCard({ name, role, image, quote, course }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <CardTitle className="text-base">{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="italic text-muted-foreground">"{quote}"</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Program:</span> {course}
        </p>
      </CardFooter>
    </Card>
  )
}
