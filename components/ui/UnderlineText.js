import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const twFullConfig = resolveConfig(tailwindConfig);

export default function UnderlineText({ children, color = "salmon" }) {
  return (
    <span className="" style={{ boxShadow: `inset 0 -0.45em ${twFullConfig.theme.colors[color]}` }}>
      {children}
    </span>
  );
}
