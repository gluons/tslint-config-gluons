export type RuleValue = boolean | [boolean, ...Array<string | number>];
export type RuleSetting = Record<string, RuleValue>;

interface Config {
	extends?: string;
	rules?: RuleSetting;
}

export default Config;
