import remarkFrontmatter from 'remark-frontmatter';
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema';

const remarkConfig = {
	plugins: [remarkFrontmatter, remarkLintFrontmatterSchema],
};
export default remarkConfig;
