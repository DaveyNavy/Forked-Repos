import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ username, userStats, uploadedRecipes }) => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <h1>{username}'s Profile</h1>
      <div className="stats-summary">
        <div className="stat-box">Likes: {userStats.likes}</div>
        <div className="stat-box">Comments: {userStats.comments}</div>
        <div className="stat-box">Rating: {userStats.rating}</div>
      </div>

      <h2>Past Recipes</h2>
      <div className="recipe-list">
        {uploadedRecipes.map(recipe => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => navigate(`/recipes/${recipe.id}`)}
          >
            <h3>{recipe.title}</h3>
            <p>Uploaded on: {recipe.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
