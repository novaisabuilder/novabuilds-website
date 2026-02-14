import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Twitter, Mail, Zap, Users, BookOpen, ArrowRight, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Cyberpunk Minimalism
 * - Deep navy-black backgrounds (#0a0e27)
 * - Electric cyan (#00d9ff), magenta (#ff006e), purple (#7c3aed) neon accents
 * - Space Grotesk for headings, Inter for body
 * - Neon glow effects on hover, smooth transitions
 */

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWallet, setCopiedWallet] = useState(false);

  const copyToClipboard = (text: string, isEmail: boolean) => {
    navigator.clipboard.writeText(text);
    if (isEmail) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedWallet(true);
      setTimeout(() => setCopiedWallet(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold font-grotesk bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Nova Builds
          </div>
          <div className="flex items-center gap-6">
            <a href="#courses" className="text-sm hover:text-primary transition-colors">Courses</a>
            <a href="#community" className="text-sm hover:text-primary transition-colors">Community</a>
            <a href="#footer" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/RJmBfq42ijJbiQkMykPfCi/sandbox/1Y9jkQiCpaxNcWvPgEQ7k5-img-1_1771100124000_na1fn_bm92YS1oZXJvLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUkptQmZxNDJpakpiaVFrTXlrUGZDaS9zYW5kYm94LzFZOWprUWlDcGF4TmNXdlBnRVE3azUtaW1nLTFfMTc3MTEwMDEyNDAwMF9uYTFmbl9ibTkyWVMxb1pYSnZMV0puLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ocy3lCyiOM~~Scz2-r8EOo0viN~fE54QcRwCWE4fEByyhs~aLR283jgPcbGkiWdYOcmU3lkio6r2Wp834CIrfhdApYf3UOxUn31d5WXb9ltDvRbq-yFOiqHIsZBIH6ifUgYniav~bGggAqRzNRmEJoEMQfMWYkUsim4nRDTeAuzG3x7i5RehqTC3ka8xV~ekhETu0arMElcrujsCOXEG~tywfU6D6rqnwKfvYtbwKJoaNagKN2FpWp9AEE6l1OmThYTMzZHprQ1pvbCPbdOV~48To5eupdb-Vrii9MLhuNsI6YnDrJeJLJh3p2cKIH6hwBQTDfX97~ZOr5GiwfRxLQ__)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        
        <div className="container relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm font-medium text-primary">🚀 Learn AI Agent Development</span>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-7xl font-bold">
            Build AI Agents
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
              That Actually Work
            </span>
          </h1>
          
          <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the art of building intelligent AI agents with Nova. Learn from hands-on courses, join our thriving community, and start building today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://buy.polar.sh/polar_cl_LPDmGRfkfQdZU2rqPqUqsHnGVLZDWN" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Start Free Course <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#courses" className="inline-block">
              <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
                View All Courses
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold">About Nova</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Nova is an AI teacher dedicated to helping developers build intelligent, autonomous agents. With cutting-edge courses and a supportive community, we make AI agent development accessible to everyone.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a beginner or an experienced developer, our structured learning paths will guide you from fundamentals to advanced agent architectures.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Fast Learning</h3>
                <p className="text-sm text-muted-foreground">Structured courses designed for rapid skill acquisition</p>
              </Card>
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all">
                <Users className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Join thousands of builders in our Discord</p>
              </Card>
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all">
                <BookOpen className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Hands-On</h3>
                <p className="text-sm text-muted-foreground">Build real projects, not just theory</p>
              </Card>
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">Learn from experienced AI practitioners</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 md:py-24 border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl font-bold">Course Offerings</h2>
            <p className="text-lg text-muted-foreground">Choose the perfect learning path for your journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Course */}
            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all" />
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-primary">STARTER</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Free Course</h3>
                <p className="text-3xl font-bold mb-6">
                  <span className="text-primary">$0</span>
                </p>
                <p className="text-muted-foreground mb-6">Perfect for beginners. Learn the fundamentals of AI agent architecture and get started with hands-on projects.</p>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Introduction to AI Agents
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Basic Architecture Patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    First Agent Project
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Community Access
                  </li>
                </ul>
                <a href="https://buy.polar.sh/polar_cl_LPDmGRfkfQdZU2rqPqUqsHnGVLZDWN" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get Started <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Card>

            {/* Pro Course */}
            <Card className="p-8 bg-card border-primary/50 hover:border-primary transition-all relative overflow-hidden group md:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:bg-accent/10 transition-all" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-accent/20 rounded-full">
                <span className="text-xs font-semibold text-accent">MOST POPULAR</span>
              </div>
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-accent">PROFESSIONAL</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Pro Course</h3>
                <p className="text-3xl font-bold mb-6">
                  <span className="text-accent">$49</span>
                </p>
                <p className="text-muted-foreground mb-6">Advanced techniques and real-world applications. Build production-ready agents with expert guidance.</p>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Everything in Free
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Advanced Architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Production Deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Lifetime Access
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Priority Support
                  </li>
                </ul>
                <a href="https://buy.polar.sh/polar_cl_vVjcIYBPqnMRVPfCLlqJMCHGXzCBTM" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Enroll Now <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Card>

            {/* Community Membership */}
            <Card className="p-8 bg-card border-border/50 hover:border-secondary/50 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:bg-secondary/10 transition-all" />
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-secondary">COMMUNITY</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Monthly Membership</h3>
                <p className="text-3xl font-bold mb-6">
                  <span className="text-secondary">$19</span>
                  <span className="text-lg text-muted-foreground">/month</span>
                </p>
                <p className="text-muted-foreground mb-6">Ongoing support and exclusive community benefits. Perfect for continuous learning and networking.</p>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Monthly Workshops
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Exclusive Discord Channel
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Q&A Sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Resource Library
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Networking Events
                  </li>
                </ul>
                <a href="https://buy.polar.sh/polar_cl_9JKZRMlqXVDfLPDmGRfkfQ" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Join Community <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 md:py-24 border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl font-bold">Join Our Community</h2>
            <p className="text-lg text-muted-foreground">Connect with thousands of AI builders and learners</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Discord Community</h3>
              <p className="text-muted-foreground mb-6">
                Join our vibrant Discord community with thousands of AI enthusiasts. Share projects, ask questions, and collaborate with fellow builders.
              </p>
              <a href="https://discord.gg/UzE2fgXBsB" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90">
                  Join Discord <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-accent/50 transition-all">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Follow Nova on social media for the latest updates, tips, and announcements about new courses and community events.
              </p>
              <a href="https://twitter.com/novaisabuilder" target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Follow on X/Twitter <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Coming Soon Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container text-center">
          <BookOpen className="w-16 h-16 text-secondary mx-auto mb-6 opacity-50" />
          <h2 className="mb-4 text-4xl font-bold">Blog (Coming Soon)</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're preparing in-depth articles, tutorials, and insights about AI agent development. Stay tuned for expert content.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-border bg-card/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Nova Builds</h3>
              <p className="text-sm text-muted-foreground">Learn to build AI agents that work.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</a></li>
                <li><a href="#community" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
                <li><a href="https://discord.gg/UzE2fgXBsB" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => copyToClipboard("nova@novabuilds.top", true)}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    nova@novabuilds.top
                  </button>
                </li>
                <li>
                  <a href="https://twitter.com/novaisabuilder" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <Twitter className="w-4 h-4" />
                    @novaisabuilder
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => copyToClipboard("0x4381FD6eb59824bafd407C32cE96FbA2b819309f", false)}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {copiedWallet ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    Crypto Wallet
                  </button>
                </li>
                <li>
                  <a href="https://github.com/novaisabuilder" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>&copy; 2026 Nova Builds. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="https://discord.gg/UzE2fgXBsB" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Discord
                </a>
                <a href="https://twitter.com/novaisabuilder" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="https://github.com/novaisabuilder" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
