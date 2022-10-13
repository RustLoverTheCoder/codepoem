import { createSignal } from "solid-js";
import { Play, Search, Bell, Set, Bolt, UserPlus, GitBranch } from "./Icon";

const Header = () => {
  return (
    <div class="w-full h-7 flex items-center justify-between px-6">
      <div class="flex items-center space-x-4">
        <div class="iconBtn">
          <UserPlus class="w-4 h-4" />
        </div>
        <div class="iconBtn">
          <GitBranch class="w-4 h-4" />
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="iconBtn">
          <Bolt class="w-4 h-4" />
        </div>
        <div class="iconBtn">
          <Play class="w-4 h-4" />
        </div>
        <div class="iconBtn">
          <Search class="w-4 h-4" />
        </div>
        <div class="iconBtn">
          <Bell class="w-4 h-4" />
        </div>
        <div class="iconBtn">
          <Set class="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
