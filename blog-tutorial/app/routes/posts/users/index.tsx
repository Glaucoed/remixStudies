import { Link } from "@remix-run/react";

export default function UserIndex() {
  return (
    <p>
      <Link to="newTeste" className="text-blue-600 underline">
        new User
      </Link>
    </p>
  );
}