import type { ComponentProps } from "react";
import { Pressable } from "react-native";
import { createBox } from "@shopify/restyle";

import type {TTHEME} from "./themes/Theme"

export const Box = createBox<TTHEME>();
export type BoxProps = ComponentProps<typeof Box>;

export const PressableBox = createBox<TTHEME, ComponentProps<typeof Pressable>>(
	Pressable,
);
export type PressableBoxProps = ComponentProps<typeof PressableBox>;