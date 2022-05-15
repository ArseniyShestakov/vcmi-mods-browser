import * as React from 'react';
import { useParams } from 'react-router-dom';
import ModComponent from '../components/Mod';

export default function ModRoute() {
  let { modId } = useParams();

  return (
    <main style={{ padding: "2rem 0" }}>
      <h2>Mod info for "{modId}"</h2>
      <div>
        <ModComponent
          short={false}
          id={modId ? modId: ""}
          name={""}
          version={"modInfo.version"}
          size={0}
        />
      </div>
    </main>
  );
}