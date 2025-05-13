import './ProfilePage.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/profile/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Profile not found");
        return res.json();
      })
      .then(data => setProfile(data))
      .catch(err => console.error("Fetch error:", err));
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <h1>{profile.posterName}'s Profile</h1>
      <p className="profile-description">{profile.posterDescription}</p>

      <div className="stats-summary">
        <div className="stat-box">Total Likes: {profile.totalLikes}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
