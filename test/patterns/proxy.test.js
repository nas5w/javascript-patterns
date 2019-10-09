const ProxyObject = require("../../src/patterns/proxy");

describe("Proxy Pattern", () => {
  it("should handle method call and forward this to the real object", () => {
    const proxyObject = new ProxyObject();
  
    proxyObject.getContributorById(1);
    proxyObject.getContributorById(2);
    proxyObject.getContributorById(1);
    proxyObject.getContributorById(2);
    proxyObject.getContributorById(2);
    proxyObject.getContributorById(3);
  
    expect(proxyObject.getCount()).toBe(3);
  });
});
