import { Link } from "react-router-dom";
function ProfileHero() {
  return (
    <div className="max-w-[860px] mx-auto px-10 pt-16 pb-12">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

        {/* Avatar */}
        <div className="w-[120px] h-[120px] rounded-full border-2 border-[#D9D4C9] shrink-0 overflow-hidden shadow-md">
          <img src="/src/assets/IMG_1423.JPG" alt="Leobert Camoro" className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2A7A4B] bg-[#E4F2EB] border border-[#BBE3CE] rounded-full px-3 py-1 mb-3">
            <span className="w-[7px] h-[7px] bg-[#2A7A4B] rounded-full inline-block" />
            Open to work · Hybrid · Remote · Cebu City, PH
          </div>

          <h1 className="font-serif text-[36px] leading-[1.1] tracking-[-0.02em] text-[#1A1814] mb-2">
            Leobert Camoro
          </h1>

          <p className="text-[15px] text-[#2D5BE3] font-medium mb-3">
            React JS Developer · React JS Enthusiast
          </p>

          <p className="text-[15px] text-[#7A7468] leading-[1.75] max-w-[480px] mb-6">
            I am a beginner on my React JS journey, passionate about building
            clean and accessible web experiences. Every project is a new lesson,
            and I am committed to growing one component at a time.
          </p>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-[#1A1814] text-[#F7F5F0] hover:opacity-85 transition-all duration-150 no-underline"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-[#F7F5F0] text-[#1A1814] border border-[#D9D4C9] hover:bg-[#EDEAE3] transition-all duration-150 no-underline">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHero;