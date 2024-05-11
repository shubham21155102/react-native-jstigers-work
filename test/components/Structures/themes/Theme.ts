import type { Theme } from "@react-navigation/native";
import { createTheme } from "@shopify/restyle";

export const COLORS = {
	white: "#FFFFFF",
	black: "#000000",

	border: "#D9D9D9",

	primaryBg: "#FFFFFF",
	cardBg: "#F2F2F2",

	primaryText: "#353535",
	secondaryText: "#616C76",
	placeholder: "#969596",
	error: "#D93D3D",

	accent: "#EC7018",
	lightAccent: "#FBE7D8",
	accent2: "#449B26",
	lightAccent2: "#449B2633",
	accent3: "#7CBA66",
	lightAccent3: "#ECFFE5",
	accent4: "#2B6418",
	accentGrey: "#EBEBEB",
	accentBlue: "rgba(92, 175, 246, 0.33)",

	cardGradient_A:
		"background: linear-gradient(180deg, #EDA926 0%, #EC7018 100%);",
	cardGradient_B:
		"background: linear-gradient(270deg, #EDA926 0%, #EC7018 100%);",
	cardGradient_C:
		"background: linear-gradient(180deg, #EDA926 0%,  #EC7018 100%);",

	success: "#449B26",
	danger: "#D93D3D",
	dangerLight: "#FFE4E4",
} as const;

export const NAV_THEME = {
	dark: false,
	colors: {
		background: COLORS.primaryBg,
		text: COLORS.primaryText,
		primary: COLORS.accent,
		border: COLORS.border,
		card: COLORS.cardBg,
		notification: COLORS.accent2,
	},
} satisfies Theme;

export const THEME = createTheme({
	colors: COLORS,

	spacing: {
		0: 0,
		0.5: 2,
		1: 4,
		1.5: 6,
		2: 8,
		2.5: 10,
		3: 12,
		3.5: 14,
		4: 16,
		5: 20,
		6: 24,
		7: 28,
		8: 32,
		9: 36,
		10: 40,
		11: 44,
		12: 48,
		14: 56,
		16: 64,
		20: 80,
		24: 96,
		28: 112,
		32: 128,
		36: 144,
		40: 160,
		44: 176,
		48: 192,
		52: 208,
		56: 224,
		60: 240,
		64: 256,
		72: 288,
		80: 320,
		96: 384,
	},

	borderRadii: {
		0: 0,
		10: 10,
		32: 32,
		full: 9999,
	},

	textVariants: {
		defaults: {
			fontSize: 18,
			fontWeight: 400,
			color: "primaryText",
			fontFamily: "Inter_400Regular",
		},

		medium: {
			fontSize: 18,
			fontWeight: 500,
			color: "primaryText",
			fontFamily: "Inter_500Medium",
		},

		semibold: {
			fontSize: 18,
			fontWeight: 600,
			color: "primaryText",
			fontFamily: "Inter_600SemiBold",
		},

		bold: {
			fontSize: 18,
			fontWeight: "bold",
			color: "primaryText",
			fontFamily: "Inter_700Bold",
		},
	},
});

export type TTHEME = typeof THEME;