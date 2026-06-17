/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

class Solution {
    /**
     * @param {string} startUrl
     * @param {HtmlParser} htmlParser
     * @return {string[]}
     */
    crawl(startUrl, htmlParser) {
        function getHostName(url) {
            return url.split('/')[2];
        }
        const startHostName = getHostName(startUrl)
        const visited = new Set()
        function dfs(url) {
            visited.add(url)
            for(const nextUrl of htmlParser.getUrls(url)) {
                if(getHostName(nextUrl)===startHostName && !visited.has(nextUrl)) {
                    dfs(nextUrl)
                }
            }
        }
        dfs(startUrl)
        return Array.from(visited)
    }
}
