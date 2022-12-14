import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const twFullConfig = resolveConfig(tailwindConfig);

export default function UnderlineText({ children, color = "salmon" }) {
  let boxShadow;
  if (color[0] === "#") boxShadow = `inset 0 -0.45em ${color}`;
  else boxShadow = `inset 0 -0.45em ${twFullConfig.theme.colors[color]}`;
  return (
    <span className="" style={{ boxShadow }}>
      {children}
    </span>
  );
}
