export function Footer() {
  return <footer>&copy; {Temporal.Now.plainDateISO().year}</footer>;
}
