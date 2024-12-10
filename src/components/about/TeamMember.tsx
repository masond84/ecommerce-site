interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-blue-600 mb-2">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};