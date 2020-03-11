/*
 * Takes local path such as http://localhost:4040 and adds url based on the parent
 * If its a folder such as angular-app/ it needs to add suffix based on the parent
 *
 */

export function continuePath(value, path): string {
    if (value.indexOf('://') > 0) {
        const url = new URL(value);

        return url.origin + path;
    }

    return value.split('/')[0] + path;
}
