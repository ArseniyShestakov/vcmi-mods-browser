import ListComponent from '../components/List';

export default function ListRoute() {
  return (
    <main style={{ padding: "2rem 0" }}>
      <h2>Mods</h2>
      <div>
        <ListComponent></ListComponent>
      </div>
    </main>
  );
}