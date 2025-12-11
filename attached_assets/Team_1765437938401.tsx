import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { id: 1, name: "Jane Doe", role: "CEO & Founder", bio: "10+ years experience in digital marketing.", image: "https://picsum.photos/id/338/200/200" },
  { id: 2, name: "John Smith", role: "Director of Operations", bio: "Organizational guru and communication pro.", image: "https://picsum.photos/id/1005/200/200" },
  { id: 3, name: "Emily Johnson", role: "Head of Design", bio: "Award-winning UX/UI specialist.", image: "https://picsum.photos/id/64/200/200" },
  { id: 4, name: "Michael Brown", role: "Senior SEO Specialist", bio: "Expert in ranking and content strategy.", image: "https://picsum.photos/id/91/200/200" },
];

const Team: React.FC = () => {
  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
           <h2 className="text-4xl md:text-5xl font-bold">Meet <span className="text-brand-green">the Team</span></h2>
           <button className="hidden md:block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">Join Our Team</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.id} className="bg-brand-gray p-6 rounded-2xl group hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div>
                   <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                   <p className="text-xs text-brand-green uppercase tracking-wide">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;