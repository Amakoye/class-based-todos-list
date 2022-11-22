import { Component } from "react";

interface NavbarProps {
  userName: string;
}

export class Navbar extends Component<NavbarProps, any> {
  render = () => (
    <>
      <div className="col-12">
        <h2 className="bg-primary text-white text-center p2">
          {this.props.userName} Todo list
        </h2>
      </div>
    </>
  );
}
