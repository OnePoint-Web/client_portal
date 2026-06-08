export default function MemberCard({ name, role, image, description }) {
  return (
    <div className="relative w-44 flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.07),_0_4px_12px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:scale-[1.02] aspect-[7/10]">
      {/* Photo */}
      <img
        src={image || '/placeholder-member.jpg'}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%]"
        style={{
          background: 'linear-gradient(to top, rgba(178,0,0,1) 0%, rgba(178,0,0,0.85) 40%, rgba(178,0,0,0.3) 75%, rgba(178,0,0,0) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />

      {/* Details */}
      <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
        <p className="text-white font-semibold text-sm leading-tight">{name}</p>
        <hr className="border-white/40 my-1.5 mx-3" />
        <p className="text-white/90 text-xs font-medium">{role}</p>
        {description && (
          <p className="text-white/60 text-[10px] mt-1 leading-snug line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  )
}
