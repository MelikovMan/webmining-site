export default async function Resume() {
  return <>
    <div className="w-full flex-wrap">
      <h3 className="text-lg font-semibold ml-3 text-slate-800">Resume</h3>
      <p className="text-slate-500 mb-5 ml-3">Basic information about me.</p>
    </div>
    <div className="flex flex-col min-w-fit w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border shrink-0 grow-0 justify-center">
      {/* Mobile view - single column */}
      <div className="block">
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Full Name</p>
          <p className="block text-sm text-slate-800">Melikov Roman Magomedovich</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Date of Birth</p>
          <p className="block text-sm text-slate-800">08/23/2002</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Place of Birth</p>
          <p className="block text-sm text-slate-800">Uray</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">School</p>
          <p className="block text-sm text-slate-800">MGASOSH №6, 11 grades (2009-2020)</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">University</p>
          <p className="block text-sm text-slate-800">KubSU, Bachelor's (2020-2024)</p>
          <p className="block text-sm text-slate-800">KubSU, Master's (2024-2025)</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Average Grade</p>
          <p className="block text-sm text-slate-800">KubSU, Bachelor's: 5.0</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Languages</p>
          <p className="block text-sm text-slate-800">Russian: Native</p>
          <p className="block text-sm text-slate-800">English: C1</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Hobbies</p>
          <p className="block text-sm text-slate-800">Games, books, music. Motorsports.</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Personal Qualities</p>
          <p className="block text-sm text-slate-800">I am curious and learn quickly.</p>
          <p className="block text-sm text-slate-800">Goal-oriented, stress-resistant.</p>
          <p className="block text-sm text-slate-800">Conscientious and communicative.</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Professional Specialization</p>
          <p className="block text-sm text-slate-800">HTML5, CSS, Javascript at advanced level</p>
          <p className="block text-sm text-slate-800">Python, Node.js, at intermediate level.</p>
          <p className="block text-sm text-slate-800">React at advanced level.</p>
          <p className="block text-sm text-slate-800">Git, Github, Github Airflows</p>
          <p className="block text-sm text-slate-800">Docker, Docker-compose,</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Future Plans</p>
          <p className="block text-sm text-slate-800">I want to develop as a frontend developer in the future.</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Contact Information</p>
          <p className="block underline">
            <a href="contact-info" rel="nofollow">Detailed contact information</a>
          </p>
        </div>
      </div>

      {/* Desktop view - table (hidden on mobile) */}

    </div>
    
  </>
}