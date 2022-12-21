import React from "react";
import "./ArticleLeft.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newUser } from "../../../dataChart";

export default function ArticleLeft() {
  return (
    <section className="widget">
      <span>New User</span>
      <section className="Container-article-left">
        <ul>
          {newUser.map((user) => (
            <li key={user.id}>
              <img src={user.img} alt="" />
              <div className="title-arLe">
                <span>{user.usename}</span>
                <span>{user.title}</span>
              </div>
              <button>
                <VisibilityIcon />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
