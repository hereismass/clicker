export type ItemType =
  | "helmet1"
  | "helmet2"
  | "shovel"
  | "pick1"
  | "pick2"
  | "hammer"
  | "drill"
  | "tnt"
  | "torch"
  | "backpack"
  | "rails"
  | "car_empty"
  | "car_full"
  | "key"
  | "chest"
  | "grey_gem"
  | "grey_stone"
  | "gold_gem"
  | "gold_stone"
  | "blue_gem"
  | "blue_stone"
  | "orange_gem"
  | "orange_stone"
  | "coal_gem"
  | "coal_stone";

export interface GenerationIconType {
  item: ItemType;
  size: "s" | "m" | "l";
}

export const GeneratorIcon = ({
  item,
  size = "s",
}: GenerationIconType): JSX.Element => {
  return (
    <img
      className={`icon ${item} size-${size}`}
      src="item.png"
      alt={`${item} item`}
    />
  );
};
