import { Checkbox, checkboxClasses } from "@mui/material";

export type TState = { name: string; code: string };

type TLegislatureProps = {
  isChecked: boolean;
  state: TState;
  onClick: (state: TState) => void;
  icon?: string;
};

export function Legislature({
  isChecked = false,
  onClick,
  state,
  icon,
}: TLegislatureProps) {
  const { name, code } = state;

  return (
    <div className="py-3 px-2 row justify-between bg-primary rounded-lg w-full">
      {/** Text */}
      <article className="row gap-2 items-center max-w-44">
        {icon ? <img className="w-4 h-4" src={icon} /> : null}
        {name ? <h6 className="text-white line-clamp-1">{name}</h6> : null}
        {code ? <h6 className="text-neutral300">({code})</h6> : null}
      </article>

      {/** Checkbox */}
      <Checkbox
        checked={isChecked}
        onChange={() => onClick(state)}
        sx={{
          marginRight: "24px",
          [`&, &.${checkboxClasses.colorSecondary}`]: {
            color: "#E9F3FF",
          },
          [`&, &.${checkboxClasses.colorPrimary}`]: {
            color: "#E9F3FF",
          },
        }}
      />
    </div>
  );
}
