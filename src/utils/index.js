/* ----- Utils ----------------------------------------------------------- */
import React from 'react'

export const lift = x => (() => x)

export const identity = x => x

export const mapC = (Component, xs) => props =>
  <div className={props.className}>
    { xs.map((x, i) => <Component key={i} {...x} {...props} />) }
  </div>

export const always = x => () => x
