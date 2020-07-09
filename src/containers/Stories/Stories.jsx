import React, { useState } from "react";

import Story from "../../components/Story";
import UndefinedUser from '../../components/UndefinedUser/UndefinedUser'

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false)
  const [selectedStory, setSelectedStory] = useState({})
  const [selectedProfile, setSelectedProfile] = useState({})

  const findStoryById = (id) => stories.find(story => story.id === id)

  const handleStory = (story) => {
    const foundStory = findStoryById(story.id);
    const profileData = getUserHandler(story.userId)

    setSelectedProfile(profileData)
    setSelectedStory(foundStory)
    toggleShowStory(!showStory)
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const profileData = getUserHandler(story.userId);

            return (
              <button 
                key={story.id}
                onClick={() => handleStory(story)}
                className="user__thumb user__thumb--hasNew"
              >

                <div className="user__thumb__wrapper">
                  {profileData ? (
                    <img src={profileData.avatar} alt={profileData.name} />
                  ) : (
                    <UndefinedUser alt_name={profileData.name}/>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>
    
      {showStory && (
        <Story
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => toggleShowStory(!showStory)}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
