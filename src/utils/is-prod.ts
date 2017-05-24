/**
 * Check production environment.
 *
 * @returns Result of production environment.
 */
function isProd(): boolean {
	return process.env.NODE_ENV === 'production';
}

export default isProd;
