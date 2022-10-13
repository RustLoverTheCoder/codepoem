import _ from "solid-js";
import play from "../assets/play.svg";
import search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import set from "../assets/set.svg";
import bolt from "../assets/bolt.svg";
import userPlus from "../assets/user-plus.svg";
import gitBranch from '../assets/git-branch.svg'

export const Play = ({ ...arg }) => {
  return <img src={play} alt="" {...arg} />;
};

export const Search = ({ ...arg }) => {
  return <img src={search} alt="" {...arg} />;
};

export const Bell = ({ ...arg }) => {
  return <img src={bell} alt="" {...arg} />;
};

export const Set = ({ ...arg }) => {
  return <img src={set} alt="" {...arg} />;
};

export const Bolt = ({ ...arg }) => {
  return <img src={bolt} alt="" {...arg} />;
};

export const UserPlus = ({ ...arg }) => {
  return <img src={userPlus} alt="" {...arg} />;
};
    
export const GitBranch = ({ ...arg }) => {
    return <img src={gitBranch} alt="" {...arg} />;
  };