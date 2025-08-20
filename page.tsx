'use client';

import React, { useState, Suspense, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import AOS from 'aos';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPc, setIsPc] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "AI-Powered Amazon Ad Assistant";
  const typingSpeed = 70; // 打字速度 (ms)

  const carouselSlides = [
    { id: 0, image: '/images/Home/banner1.png' },
    { id: 1, image: '/images/Home/banner2.png' },
    { id: 2, image: '/images/Home/banner3.jpg' },
    { id: 3, image: '/images/Home/banner4.jpg' }
  ];

  useEffect(() => {
    // 判断是否是pc
    const userAgent = navigator.userAgent;
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Android|iP(ad|od|hone)/i.test(userAgent);
    setIsPc(!isMobile);
  }, []);

  useEffect(() => {
    // 初始化AOS动画库
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  // 移动端Banner幻灯片
  const mobileBannerSlides = [
    { id: 2, image: '/images/Home/bg/banner2.jpg' },
    { id: 3, image: '/images/Home/bg/banner3.png' },
  ];
  // PC端Banner幻灯片
  const pcBannerSlides = [
    { id: 1, image: '/images/Home/bg/banner1.png' },
    { id: 3, image: '/images/Home/bg/banner3.png' },
  ];
  // 根据设备类型选择要使用的slides
  const bannerSlides = isPc ? pcBannerSlides : mobileBannerSlides;

  const features = [
    {
      title: 'Smart Ad Optimization',
      description: 'Continuously adjusts your campaigns for optimal performance',
      icon: 'mdi:cog-outline',
      image: '/images/svg/features/smart-ad-optimization.svg',
    },
    {
      title: 'Keyword & Competitor Targeting',
      description: 'Identifies profitable keywords and competitor ASINs',
      icon: 'mdi:target-arrow',
      image: '/images/svg/features/keyword-targeting.svg',
    },
    {
      title: 'ACOS Lowering Engine',
      description: 'Optimizes bids to reduce costs while maintaining sales',
      icon: 'mdi:account-cash-outline',
      image: '/images/svg/features/acos-lowering.svg',
    },
    {
      title: 'Performance Comparison',
      description: 'Benchmarks your performance against category averages',
      icon: 'mdi:chart-bar',
      image: '/images/svg/features/performance-comparison.svg',
    },
    {
      title: 'Auto Budget Optimization',
      description: 'Allocates budget to the highest-performing campaigns',
      icon: 'mdi:trending-up',
      image: '/images/svg/features/auto-budget-optimization.svg',
    },
  ];

  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  // 打字机效果
  useEffect(() => {
    let index = 0;
    let timer: NodeJS.Timeout | undefined;

    if (isTyping) {
      timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.substring(0, index));
          index++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, typingSpeed);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTyping, fullText, typingSpeed]);

  return (
    <main className="bg-white"  style={{paddingTop: '72px'}}>
      <style jsx global>{`
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        .animate-pulse-soft {
          animation: pulse-soft 3s infinite ease-in-out;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s infinite ease-in-out;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 8s infinite ease-in-out;
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
        
        .text-shadow-lg {
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
        }
        
        .typing-cursor::after {
          content: '|';
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }
        
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black"
     
      >
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Home/bg.png"
            alt="Background"
            fill
            className="object-cover opacity-100"
            priority
          />
          {/* 渐变叠加层 */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div> */}
        </div>

        {/* 内容区域 */}
        <div className="container mx-auto px-4 relative z-10 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            {/* 左侧文字区域 - 无背景，深色文字，按钮适配白底 */}
            <div className="w-full space-y-8 p-0 md:p-4" data-aos="fade-right">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight md:leading-snug">
                  {/* <span className="animate-pulse-soft">DeepBI</span> <span className="text-blue-600">–</span>
                  <br /> */}
                  {/* 加入文字渐变 */}
                  <span className={`text-gray-800 text-gradient animate-pulse-soft ${isTyping ? 'typing-cursor' : ''}`}>{displayText}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                  One-click AI Automation, Lower ACOS, Better Sales
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-8 py-4 bg-[#1838E3] text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 animate-bounce-subtle">
                  Try for free
                </button>
                <button className="px-8 py-4 bg-white border-2 border-[#1838E3] text-[#1838E3] text-lg font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                  Book a Demo
              </button>
            </div>

              {/* 信任标识 */}
              <div className="flex items-center gap-4 pt-8">
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                  <Icon icon="mdi:shield-check" className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700 text-sm font-medium">Amazon Official Partner</span>
                </div>
                {/* <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                  <Icon icon="mdi:star" className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-gray-700 text-sm font-medium">4.9/5 Rating</span>
                </div> */}
              </div>
            </div>
            {/* 右侧留空，显示背景图片 */}
            <div className="w-full md:w-1/2" data-aos="fade-left"></div>
          </div>
        </div>

        {/* 装饰元素 */}
        {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div> */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        {/* 添加更多光效装饰 */}
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl animate-float-slow"></div>
      </section>

      {/* Who it's for Section - 直接连接，没有波浪分隔符 */}
      <section id="who-its-for" className="py-16 md:py-24 px-4 bg-gray-50 md:px-8">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800 title-underline md:mb-16">Who It&apos;s For</h2>
          <p className="text-lg text-center text-gray-600 mb-16">Built for modern Amazon sellers in different stages of growth.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="group bg-white p-6 rounded-lg shadow-md md:shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border border-transparent group-hover:border-blue-500" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3 transition-colors duration-300 ">
                  <Icon icon="mdi:store" className="w-6 h-6 text-green-600  transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl">Solo Sellers</h3>
              </div>
              <p className="text-gray-600">The AI assistant helps you run and optimize Amazon PPC campaigns without hiring expensive agencies.</p>
            </div>
            
            <div className="group bg-white p-6 rounded-lg shadow-md md:shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border border-transparent group-hover:border-blue-500" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3 transition-colors duration-300 ">
                  <Icon icon="mdi:account-group" className="w-6 h-6 text-purple-600  transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl">Small Teams</h3>
              </div>
              <p className="text-gray-600">No need to hire and train ad specialists – our AI handles the complex optimization work so your team can focus on strategy.</p>
            </div>
            
            <div className="group bg-white p-6 rounded-lg shadow-md md:shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border border-transparent group-hover:border-blue-500" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3 transition-colors duration-300 ">
                  <Icon icon="mdi:rocket-launch" className="w-6 h-6 text-orange-600  transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl">New Product Launches</h3>
              </div>
              <p className="text-gray-600">Get traction for new product listings without wasting budget on ineffective keyword strategies.</p>
            </div>
            
            <div className="group bg-white p-6 rounded-lg shadow-md md:shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border border-transparent group-hover:border-blue-500" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-3 transition-colors duration-300 ">
                  <Icon icon="mdi:chart-line" className="w-6 h-6 text-cyan-600  transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl">Cross-Market Operations</h3>
              </div>
              <p className="text-gray-600">Manage ads easily across multiple marketplaces with AI that understands local market differences and optimizes accordingly.</p>
            </div>
            
            <div className="group bg-white p-6 rounded-lg shadow-md md:shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border border-transparent group-hover:border-blue-500" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3 transition-colors duration-300 ">
                  <Icon icon="mdi:cash" className="w-6 h-6 text-red-600  transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl">Performance-Driven Pros</h3>
              </div>
              <p className="text-gray-600">Advanced analytics and flexible AI controls to meet specific advertising goals and metrics.</p>
            </div>
            
            <div className="group bg-white p-6 rounded-lg shadow-md md:shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border border-transparent group-hover:border-blue-500" data-aos="fade-up" data-aos-delay="600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-3 transition-colors duration-300 ">
                  <Icon icon="mdi:poll" className="w-6 h-6 text-yellow-600  transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl">Growth and Scale-Minded Marketers</h3>
              </div>
              <p className="text-gray-600">Let DeepBI&apos;s AI find growth opportunities while maintaining your target ACOS and profitability levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sellers Love DeepBI - 直接连接，没有波浪分隔符 */}
      <section id="why-sellers-love" className="py-16 md:py-24 px-4 relative bg-white">
        <div className="absolute inset-0 z-0 opacity-5">
          <Image
            src="/images/svg/decorative/abstract-bg.svg"
            alt="Abstract Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-800 title-underline">Why Sellers Love DeepBI</h2>
          <p className="text-lg text-center text-gray-600 mb-16">More Than Just Time-Saving: Smarter, Scalable, Structured Gains</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all" data-aos="fade-right">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Icon icon="mdi:check" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">85% Time Saved</h3>
                    <p className="text-gray-600">Automate tedious ad management tasks that eat up hours daily</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Icon icon="mdi:check" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Scientific Targeting Algorithms</h3>
                    <p className="text-gray-600">Target the right keywords and ASINs with precision</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Icon icon="mdi:check" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Adaptive Bidding & Budgeting</h3>
                    <p className="text-gray-600">Never overspend or miss opportunities with smart bid adjustments</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Icon icon="mdi:check" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Deep Data on Performance</h3>
                    <p className="text-gray-600">Understand what&apos;s working and why with detailed analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Icon icon="mdi:check" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">The AI Platform Edge</h3>
                    <p className="text-gray-600">Continuous improvement through machine learning</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition hover:scale-105 shadow-md">Try for $0</button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition hover:scale-105">Book a Demo</button>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg" data-aos="fade-left">
              <div className="h-full">
                <Image 
                  src="/images/Home/preview.webp" 
                  alt="DeepBI Dashboard Features" 
                  width={600}
                  height={400}
                  className="w-full h-full object-contain rounded-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What DeepBI Does for You - 直接连接，没有波浪分隔符 */}
      <section id="what-deepbi-does" className="py-16 px-4 bg-gray-50 relative md:py-28">
        {/* 3D cube decorations */}
        <div className="absolute top-10 left-10 w-16 h-16 opacity-30 md:block hidden">
          <Image 
            src="/images/svg/decorative/cube-3d.svg" 
            alt="" 
            width={64}
            height={64}
            className="w-full h-full object-contain" 
          />
        </div>
        <div className="absolute bottom-10 right-10 w-20 h-20 opacity-30 md:block hidden">
          <Image 
            src="/images/svg/decorative/cube-3d.svg" 
            alt="" 
            width={80}
            height={80}
            className="w-full h-full object-contain" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800 md:mb-16">What DeepBI Does for You</h2>
          <p className="text-lg text-center text-gray-600 mb-16">Fully Automated – From Setup to Scalable Results</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-8" data-aos="fade-right">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start p-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-100 md:hover:bg-gray-50 ${index === selectedFeatureIndex ? 'bg-blue-50 shadow-lg border border-blue-200' : ''}`}
                  onClick={() => setSelectedFeatureIndex(index)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0
                    ${index === selectedFeatureIndex ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}
                  >
                    <Icon icon={feature.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="mt-8 flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">Try for $0</button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition">Book a Demo</button>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
              <Image 
                src={features[selectedFeatureIndex].image}
                alt={features[selectedFeatureIndex].title} 
                width={600}
                height={500}
                className="w-full h-full object-contain rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How DeepBI Works */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 relative">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-60 h-60 opacity-10 md:block hidden">
          <Image 
            src="/images/svg/decorative/ai-brain-detailed.svg" 
            alt="" 
            width={240}
            height={240}
            className="w-full h-full object-contain" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-800">How DeepBI Works</h2>
          <p className="text-lg text-center text-gray-600 mb-16">5 AI Principles Behind Smarter Ad Optimization</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold text-lg">Smart Traffic Discovery</h3>
              </div>
              <p className="text-gray-600">Automatically identifies high-converting search terms and product targeting opportunities that manual research might miss.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold text-lg">Precision Exploration & Expansion</h3>
              </div>
              <p className="text-gray-600">Intelligently tests new targeting options while efficiently scaling what&apos;s already working to expand your reach.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold text-lg">Smart Budget Flow</h3>
              </div>
              <p className="text-gray-600">Dynamically reallocates your ad spend to the highest-performing campaigns and targeting options for maximum ROI.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-bold text-lg">Smart Bidding Strategy</h3>
              </div>
              <p className="text-gray-600">Continually adjusts bid amounts based on competition, conversion likelihood, and your profitability targets.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600">5</span>
                </div>
                <h3 className="font-bold text-lg">Traffic Quality-focused System</h3>
              </div>
              <p className="text-gray-600">Prioritizes not just clicks but quality traffic that leads to conversions by analyzing search patterns and buyer behavior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section id="results" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-800">Real Results from Real Sellers</h2>
          <p className="text-lg text-center text-gray-600 mb-16">The data speaks for itself, thanks to our AI.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-right">
              <h3 className="font-bold text-xl mb-4">Significant ACOS Decrease</h3>
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/svg/acos-chart.svg"
                  alt="ACOS Decrease Chart"
                  className="w-full h-full object-contain"
                  fill
                />
              </div>
              <p className="text-gray-600 mt-4">Average 32% reduction in ACOS across all seller categories</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-left">
              <h3 className="font-bold text-xl mb-4">Monthly Sales Growth</h3>
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/svg/sales-growth-chart.svg"
                  alt="Sales Growth Chart"
                  className="w-full h-full object-contain"
                  fill
                />
              </div>
              <p className="text-gray-600 mt-4">Average 47% increase in monthly sales after 90 days with DeepBI</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-8 mt-12">
            <button className="bg-white border border-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition flex items-center">
              <span>See Case Studies</span>
              <Icon icon="mdi:arrow-right" className="ml-2 w-4 h-4" />
            </button>
            <button className="bg-white border border-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition flex items-center">
              <span>See Case Studies</span>
              <Icon icon="mdi:arrow-right" className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-800">Why Hundreds of Amazon Sellers Trust DeepBI</h2>
          <p className="text-lg text-center text-gray-600 mb-16">Built with compliance, stability, and global readiness in mind.</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center mb-16 gap-12">
            <div className="relative h-[100px] w-[200px]">
              <Image 
                src="/images/Home/anazonAVP-web.png" 
                alt="Amazon Partner Network" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="h-16 w-0.5 bg-gray-200 hidden md:block"></div>
            <div className="relative h-[100px] w-[200px]">
                <Image 
                src="/images/Home/amazonSPN-web.png" 
                alt="SPN Partner" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
            </div>
              </div>
              
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <Icon icon="mdi:shield-check" className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="font-bold text-lg">Official API Partner</h3>
              </div>
              <p className="text-gray-600">Fully compliant with Amazon&apos;s API rules and regulations to ensure account security.</p>
              </div>
              
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <Icon icon="mdi:globe" className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="font-bold text-lg">Global Capability</h3>
                </div>
              <p className="text-gray-600">Supporting all major Amazon marketplaces with region-specific optimization strategies.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <Icon icon="mdi:headset" className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="font-bold text-lg">Dedicated Support</h3>
              </div>
              <p className="text-gray-600">Expert customer success team to help with strategy questions and technical assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-800">What Real Sellers Say</h2>
          <p className="text-lg text-center text-gray-600 mb-16">Lower ACoS. Higher sales. Less stress.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <p className="text-gray-600 italic mb-4">&quot;DeepBI helped me cut my ACOS by 34% in just three weeks. The AI found keywords I never considered but are now my top converters.&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/Home/avatar/avatar1.jpg" 
                    alt="James S." 
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-bold">James S.</p>
                  <p className="text-sm text-gray-500">Kitchen Niche Seller</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <p className="text-gray-600 italic mb-4">&quot;I was spending hours each week managing my Amazon ads with minimal results. DeepBI&apos;s automation saved me time and increased my sales by 52%.&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/Home/avatar/avatar2.jpg" 
                    alt="Michelle K." 
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-bold">Michelle K.</p>
                  <p className="text-sm text-gray-500">Beauty Brand Owner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
              <p className="text-gray-600 italic mb-4">&quot;As a busy 7-figure seller, I needed something that just works without constant oversight. DeepBI&apos;s automation is exactly what I was looking for.&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/Home/avatar/avatar3.jpg" 
                    alt="David L." 
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-bold">David L.</p>
                  <p className="text-sm text-gray-500">Sports Equipment Seller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative md:py-28">
        <div className="absolute inset-0 z-0 bg-blue-600 opacity-5">
          <div className="w-full h-full bg-[url('/images/svg/hero/modern-hero-bg.svg')] bg-cover bg-center"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800 title-underline md:mb-8">Ready to optimize your Amazon ads?</h2>
          <p className="text-lg text-gray-600 mb-8">Just $0 to start. No setup required. Cancel anytime.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition hover:scale-105 shadow-md md:shadow-lg">Try for $0</button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition hover-scale">Book a Demo</button>
          </div>
          
          <div className="mt-10 flex justify-center items-center gap-4">
            <div className="flex items-center bg-white py-2 px-4 rounded-full shadow-sm">
              <Image 
                src="/images/svg/icons/amazon-partner.svg" 
                alt="Amazon Partner" 
                className="h-8"
                width={32}
                height={32}
              />
              <span className="ml-2 text-sm font-medium text-gray-700">Official Amazon Partner</span>
            </div>
            
            <div className="flex items-center bg-white py-2 px-4 rounded-full shadow-sm">
              <Icon icon="mdi:security" className="w-6 h-6 text-green-500" />
              <span className="ml-2 text-sm font-medium text-gray-700">100% Secure</span>
            </div>
          </div>
    </div>
      </section>
    </main>
  );
};

export default HomePage;