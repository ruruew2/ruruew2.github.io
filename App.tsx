
import React from 'react';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden animate-gradient py-12 px-6">
      
      {/* Container for Mobile-First Look */}
      <div className="w-full max-w-md flex flex-col items-center z-10">
        
        {/* Profile Section */}
        <section className="text-center mb-10">
          <div className="relative inline-block">
            {/* Animated Profile Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=400&h=400"
              alt="프로필 - 헤드셋을 쓴 귀여운 고양이"
              className="relative w-32 h-32 rounded-full border-4 border-white/30 object-cover shadow-2xl bg-white/10"
            />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white tracking-tight">
            안녕하세요, 강미현입니다! 👋
          </h1>
          <p className="mt-2 text-white/80 font-medium">
            아이디어를 현실로 만드는 주니어 개발자
          </p>
          <p className="mt-1 text-sm text-white/60">
            TypeScript와 React로 세상에 없던 가치를 만듭니다.
          </p>
        </section>

        {/* Project Links Section */}
        <section className="w-full space-y-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        {/* Footer Social Section */}
        <footer className="mt-12 w-full flex justify-center space-x-8 pb-10">
          {SOCIAL_LINKS().map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-6 drop-shadow-md"
              title={social.platform}
            >
              {social.icon}
            </a>
          ))}
        </footer>

        {/* Optional Glass Info Tag */}
        <div className="glass px-4 py-2 rounded-full text-[10px] text-white/40 uppercase tracking-widest mb-4">
          Built with React & Glassmorphism
        </div>
      </div>

      {/* Background Decorative Shapes (Static but glass-textured) */}
      <div className="absolute top-[-10%] left-[-20%] w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default App;
