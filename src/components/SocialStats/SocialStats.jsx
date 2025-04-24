import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaVimeoV, FaMediumM } from 'react-icons/fa';
import '../../styles/SocialStats.css'
const SocialFollowCards = () => {
  const stats = [
    { icon: <FaFacebookF />, label: 'Fans', count: '34,456', color: 'bg-[#3b5998]' },
    { icon: <FaTwitter />, label: 'Followers', count: '34,456', color: 'bg-[#00aced]' },
    { icon: <FaYoutube />, label: 'Subscribers', count: '34,456', color: 'bg-[#cd201f]' },
    { icon: <FaInstagram />, label: 'Followers', count: '34,456', color: 'bg-[#bc2a8d]' },
    { icon: <FaVimeoV />, label: 'Followers', count: '34,456', color: 'bg-[#1ab7ea]' },
    { icon: <FaMediumM />, label: 'Followers', count: '34,456', color: 'bg-[#00ab6c]' },
  ];

  return (
    <div className="p-4-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
      <div className="grid-layout">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`text-white rounded-sm p-2 flex flex-col items-center justify-center text-center h-20 ${item.color}`}
          >
            <div className="text-base">{item.icon}</div>
            <div className="text-sm font-semibold leading-tight">{item.count}</div>
            <div className="text-xs leading-tight">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFollowCards;
