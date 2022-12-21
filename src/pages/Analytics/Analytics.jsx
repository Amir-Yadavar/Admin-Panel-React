import React from "react";
import "./Analytics.css";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import BackspaceIcon from "@mui/icons-material/Backspace";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HailIcon from '@mui/icons-material/Hail';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Analytics() {
  return (
    <section className="container-analyc">
      <section>
        <div className="div-svg">
          <svg>
            <circle r="40%" cx="50%" cy="50%"></circle>
            <text x="36%" y="52%">
              Sale Product
            </text>
          </svg>
        </div>

        <div className="detal-svg">
          <div>
            <div>
              <span>
                <LoyaltyIcon className="icon-analyc" fontSize="large" />{" "}
              </span>
              <span>Sale product :</span>
            </div>
            <span>90.000</span>
          </div>

          <div>
            <div>
              <span>
                <AssignmentReturnIcon
                  className="icon-analyc"
                  fontSize="large"
                />{" "}
              </span>
              <span>return goods :</span>
            </div>

            <span>10.000</span>
          </div>

          <div>
            <div>
              <span>
                <BackspaceIcon className="icon-analyc" fontSize="large" />{" "}
              </span>
              <span>failure product :</span>
            </div>

            <span>5.000</span>
          </div>

          <div>
            <div>
              <span>
                <AttachMoneyIcon className="icon-analyc" fontSize="large" />{" "}
              </span>
              <span>Costs product :</span>
            </div>

            <span>12.000</span>
          </div>

          <div>
            <div>
              <span>
                <MonetizationOnIcon className="icon-analyc" fontSize="large" />{" "}
              </span>
              <span>Costs Company :</span>
            </div>

            <span>20.000</span>
          </div>
        </div>
      </section>

      <section>
        <div className="detal-svg">
          <div>
            <div>
              <span>
                <ShoppingCartIcon className="icon-analyc" fontSize="large" />{" "}
              </span>
              <span>Buy product :</span>
            </div>
            <span>120.000</span>
          </div>

          <div>
            <div>
              <span>
                <AssignmentReturnedIcon
                  className="icon-analyc"
                  fontSize="large"
                />{" "}
              </span>
              <span>return goods :</span>
            </div>

            <span>20.000</span>
          </div>

          <div>
            <div>
              <span>
                <BackspaceIcon className="icon-analyc" fontSize="large" />{" "}
              </span>
              <span>failure product :</span>
            </div>

            <span>10.000</span>
          </div>

          <div>
            <div>
              <span>
                <LocalShippingIcon className="icon-analyc" fontSize="large" />{" "}
              </span>
              <span>Costs freight :</span>
            </div>

            <span>7.000</span>
          </div>

          <div>
            <div>
              <span>
                <HailIcon className="icon-analyc" fontSize="large" />{" "}
              </span>
              <span>Costs Human :</span>
            </div>

            <span>23.000</span>
          </div>
        </div>

        <div className="div-svg">
          <svg>
            <circle r="40%" cx="50%" cy="50%"></circle>
            <text x="36%" y="52%">
              Buy Product
            </text>
          </svg>
        </div>
      </section>
    </section>
  );
}
