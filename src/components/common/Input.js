import React from "react";

export default function Input(props) {
  return <input
            className = {props.className}
            style = {props.style}
            value = {props.value}
            name = {props.name}
            type = {props.type}
            onChange={props.onChange}
         />;
}
