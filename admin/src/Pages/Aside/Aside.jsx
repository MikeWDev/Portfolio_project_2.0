import React from "react";
import Actionbutton from "../../Components/ActionButton";
import user from "../../assets/user-img.jpg";
import {
  CaretDown,
  Envelope,
  FilePlus,
  FolderPlus,
  UserList,
} from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";
import { HouseSimple } from "@phosphor-icons/react";
const Aside = () => {
  return (
    <section>
      <aside>
        <div className="header">
          <div className="heading">
            <span></span>
            <h2>KDev Admin</h2>
          </div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user picture" />
            </div>
            <div className="user-name">Michal Kocik</div>
            <div>
              <CaretDown color="#ada9bb" size={24} />
            </div>
          </div>
        </div>
        <div className="main-buttons">
          <Actionbutton
            icon={<HouseSimple color="#ada9bb" size={32} />}
            name="Dashboard"
            to="dashboard"
          />
          <Actionbutton
            icon={<Envelope color="#ada9bb" size={32} />}
            name="Messages"
            to="messages"
          />
        </div>
        <nav>
          <div className="action-heading">
            <h2>Actions</h2>
          </div>
          <div className="actions-con">
            <Actionbutton
              icon={<FolderPlus color="#ada9bb" size={32} />}
              name="Add project"
              to="addproject"
            />
            <Actionbutton
              icon={<UserList color="#ada9bb" size={32} />}
              name="Add skill"
              to="addskill"
            />
          </div>
        </nav>
      </aside>
    </section>
  );
};

export default Aside;
