export const api = {
  domain: 'http://localhost',
  port: 3000,
  get apiUrl() { return `${this.domain}:${this.port}/` }
}
