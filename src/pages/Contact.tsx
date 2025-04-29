
import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('表单已提交:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="bg-space-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              联系我们
            </h1>
            <p className="text-lg text-space-light/80 mb-8">
              对我们的太空任务或技术有疑问？请与我们的团队联系。
            </p>
          </div>
        </div>
      </section>

      {/* Contact form and map */}
      <section className="bg-space-secondary/30 py-16 relative overflow-hidden space-stars">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Contact form */}
            <div className="lg:w-1/2">
              <div className="bg-space-dark/70 backdrop-blur-md rounded-lg p-8 border border-space-accent/20">
                <h2 className="text-2xl font-orbitron font-bold mb-6">给我们留言</h2>

                {submitted ? (
                  <div className="bg-space-accent/20 border border-space-accent text-space-light rounded-lg p-4 text-center">
                    <p className="font-orbitron mb-2">感谢您的留言！</p>
                    <p className="text-space-light/80">我们会尽快回复您。</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-space-light mb-2 font-medium">
                        您的姓名
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-secondary/50 border border-space-accent/30 rounded-md px-4 py-3 text-space-light focus:outline-none focus:border-space-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-space-light mb-2 font-medium">
                        电子邮箱
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-secondary/50 border border-space-accent/30 rounded-md px-4 py-3 text-space-light focus:outline-none focus:border-space-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-space-light mb-2 font-medium">
                        主题
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-secondary/50 border border-space-accent/30 rounded-md px-4 py-3 text-space-light focus:outline-none focus:border-space-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-space-light mb-2 font-medium">
                        您的留言
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-space-secondary/50 border border-space-accent/30 rounded-md px-4 py-3 text-space-light focus:outline-none focus:border-space-accent resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`space-button w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? '发送中...' : '发送留言'} <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info and map */}
            <div className="lg:w-1/2">
              <div className="bg-space-dark/70 backdrop-blur-md rounded-lg p-8 border border-space-accent/20 mb-8">
                <h2 className="text-2xl font-orbitron font-bold mb-6">联系信息</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-space-accent/20 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-space-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron mb-1">我们的地址</h3>
                      <p className="text-space-light/80">
                        宇宙大道1234号，科研园区<br />
                        休斯顿，德克萨斯州 78701
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-space-accent/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-space-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron mb-1">电子邮箱</h3>
                      <a href="mailto:contact@astrox.example" className="text-space-light/80 hover:text-space-accent transition-colors">
                        contact@astrox.example
                      </a>
                      <p className="text-space-light/60 text-sm mt-1">
                        媒体咨询: <a href="mailto:press@astrox.example" className="hover:text-space-accent transition-colors">press@astrox.example</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-space-accent/20 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-space-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron mb-1">电话</h3>
                      <p className="text-space-light/80">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-space-light/60 text-sm mt-1">
                        周一至周五，上午9:00至下午5:00（美东时间）
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 bg-space-secondary/50 rounded-lg overflow-hidden border border-space-accent/20">
                <div className="w-full h-full relative">
                  {/* This would be a real map in production */}
                  <div className="absolute inset-0 bg-space-secondary flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-space-accent mx-auto mb-2" />
                      <p className="text-space-light/70">互动地图将在此加载</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-space-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
              常见问题
            </h2>

            <div className="space-y-6">
              <div className="bg-space-secondary/30 rounded-lg p-6 border border-space-accent/20">
                <h3 className="text-xl font-orbitron mb-3">我可以参观你们的研究设施吗？</h3>
                <p className="text-space-light/80">
                  是的，我们在每月第一个星期五提供设施导览。参观必须通过我们的访客中心提前预订。
                </p>
              </div>

              <div className="bg-space-secondary/30 rounded-lg p-6 border border-space-accent/20">
                <h3 className="text-xl font-orbitron mb-3">你们提供实习机会吗？</h3>
                <p className="text-space-light/80">
                  我们为航空航天、物理、工程和计算机科学领域的本科生和研究生提供暑期实习。申请于每年1月开放。
                </p>
              </div>

              <div className="bg-space-secondary/30 rounded-lg p-6 border border-space-accent/20">
                <h3 className="text-xl font-orbitron mb-3">如何与天行者合作研究？</h3>
                <p className="text-space-light/80">
                  我们欢迎与学术机构和行业伙伴开展合作研究项目。请向我们的研究部门提交详细提案。
                </p>
              </div>

              <div className="bg-space-secondary/30 rounded-lg p-6 border border-space-accent/20">
                <h3 className="text-xl font-orbitron mb-3">你们的任务发射对公众开放吗？</h3>
                <p className="text-space-light/80">
                  大多数发射都设有公共观看区，详情会在每次计划发射日期前约一个月在我们的网站上发布。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
