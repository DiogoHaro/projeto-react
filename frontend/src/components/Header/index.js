import React from 'react';

import { Container } from './styles';
import { Tooltip } from 'react-tippy';
import { Link } from 'react-router-dom';
import { MdMap, MdPlace, MdWork, MdPersonPin } from 'react-icons/md';


export default function Header() {
  return (
    <Container>
      <header>
        <Tooltip title="Estados" position="bottom" trigger="mouseenter">
          <Link to="/estados">
            <button className="btn-card">
              <MdMap size={50} color="rgb(11, 10, 13)" />
            </button>
          </Link>
        </Tooltip>

        <Tooltip title="Cidades" position="bottom" trigger="mouseenter">
          <button className="btn-card">
            <MdPlace size={50} color="rgb(11, 10, 13)" />
          </button>
        </Tooltip>

        <Tooltip title="Cargo" position="bottom" trigger="mouseenter">
          <button className="btn-card">
            <MdWork size={50} color="rgb(11, 10, 13)" />
          </button>
        </Tooltip>

        <Tooltip title="Funcionário" position="bottom" trigger="mouseenter">
          <button className="btn-card">
            <MdPersonPin size={50} color="rgb(11, 10, 13)" />
          </button>
        </Tooltip>
      </header>
    </Container>
  );
}
