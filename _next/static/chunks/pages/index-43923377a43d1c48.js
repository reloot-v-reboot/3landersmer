(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        78581: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(95401)
            }])
        },
        95401: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n(28520),
                i = n.n(a),
                s = n(85893),
                r = n(9008),
                o = n(3283),
                u = n.n(o),
                p = n(67294),
                l = (n(1289), n(85402)),
                y = "0x85e57aE41f5D84EbB4b2BD1f63bD24C54c6d0cFE",
                d = [{
                    inputs: [{
                        internalType: "uint256",
                        name: "maxBatchSize_",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "TotalToken_",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "approved",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bool",
                        name: "approved",
                        type: "bool"
                    }],
                    name: "ApprovalForAll",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "mintamount",
                        type: "uint256"
                    }],
                    name: "Claim",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "IsClaimActive",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "IsSalesStart",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "MaxClaimTokenTotalForFree",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "MaxClaimTokenTotalForFreePerwallet",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "MaxFreeClaimPerTx",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "MaxMintPerTx",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "mintamount",
                        type: "uint256"
                    }],
                    name: "Mint",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "mintamount",
                        type: "uint256"
                    }],
                    name: "MintTo",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "Mintprice",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "SetIsClaimActive",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_MaxFreeClaimPerTx",
                        type: "uint256"
                    }],
                    name: "SetMaxMintPerTxForClaim",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "SetSalesStart",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "TotalCollectionSize",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "getApproved",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "getOwnershipData",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "addr",
                            type: "address"
                        }, {
                            internalType: "uint64",
                            name: "startTimestamp",
                            type: "uint64"
                        }],
                        internalType: "struct ERC721A.TokenOwnership",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }],
                    name: "isApprovedForAll",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "nextOwnerToExplicitlySet",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }],
                    name: "numberMinted",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "ownerOf",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "approved",
                        type: "bool"
                    }],
                    name: "setApprovalForAll",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "string",
                        name: "baseURI",
                        type: "string"
                    }],
                    name: "setBaseURI",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_MaxClaimTokenTotalForFree",
                        type: "uint256"
                    }],
                    name: "setMaxClaimTokenTotalForFree",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_MaxMintPerTx",
                        type: "uint256"
                    }],
                    name: "setMaxMintPerTx",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_Mintprice",
                        type: "uint256"
                    }],
                    name: "setMintprice",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "quantity",
                        type: "uint256"
                    }],
                    name: "setOwnersExplicit",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_TotalToken",
                        type: "uint256"
                    }],
                    name: "setTotalCollectionSize",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes4",
                        name: "interfaceId",
                        type: "bytes4"
                    }],
                    name: "supportsInterface",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "index",
                        type: "uint256"
                    }],
                    name: "tokenByIndex",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256"
                    }],
                    name: "tokenOfOwnerByIndex",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "tokenURI",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_owner",
                        type: "address"
                    }],
                    name: "tokensOfOwner",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "",
                        type: "uint256[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "withdraw",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }];

            function m(e, t, n, a, i, s, r) {
                try {
                    var o = e[s](r),
                        u = o.value
                } catch (p) {
                    return void n(p)
                }
                o.done ? t(u) : Promise.resolve(u).then(a, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, i) {
                        var s = e.apply(t, n);

                        function r(e) {
                            m(s, a, i, r, o, "next", e)
                        }

                        function o(e) {
                            m(s, a, i, r, o, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }
            l.ZP.OverPack;

            function f() {
                var e = (0, p.useState)(!1),
                    t = e[0],
                    n = e[1],
                    a = (0, p.useState)(null),
                    o = a[0],
                    l = a[1],
                    m = (0, p.useState)(null),
                    f = (m[0], m[1], (0, p.useState)(1)),
                    b = f[0],
                    w = f[1],
                    x = (0, p.useState)(null),
                    h = x[0],
                    T = x[1],
                    M = (0, p.useState)(null),
                    v = (M[0], M[1], (0, p.useState)(!1)),
                    g = (v[0], v[1]),
                    k = (0, p.useState)(0),
                    j = k[0],
                    S = k[1],
                    N = (0, p.useState)(0),
                    _ = (N[0], N[1], (0, p.useState)(0)),
                    L = (_[0], _[1], (0, p.useState)(!1)),
                    C = (L[0], L[1]),
                    F = (0, p.useState)(!1),
                    I = (F[0], F[1], (0, p.useState)(!1)),
                    O = (I[0], I[1]),
                    R = (0, p.useState)(null),
                    E = (R[0], R[1], (0, p.useState)(null)),
                    B = (E[0], E[1], (0, p.useState)(null)),
                    P = (B[0], B[1], (0, p.useState)(0)),
                    A = (P[0], P[1]);

                function q() {
                    return D.apply(this, arguments)
                }

                function D() {
                    return (D = c(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    g(!0), "undefined" !== typeof window.web3 ? window.web3 = new(u())(window.ethereum) : alert("No Ethereum interface injected into browser. Read-only access"), window.ethereum.enable().then((function(e) {
                                        window.web3.eth.net.getNetworkType().then((function(e) {
                                            console.log(e), "main" != e && alert("Are you on Ethereum Network?")
                                        }));
                                        var t = e[0];
                                        l(t), n(!0), z(t)
                                    })).catch((function(e) {
                                        console.error(e)
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function W() {
                    return (W = c(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n(!1);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function z(e) {
                    return H.apply(this, arguments)
                }

                function H() {
                    return (H = c(i().mark((function e(t) {
                        var n, a, s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = new window.web3.eth.Contract(d, y), T(n), e.next = 4, n.methods.IsSalesStart().call();
                                case 4:
                                    return a = e.sent, C(a), e.next = 8, n.methods.totalSupply().call();
                                case 8:
                                    s = e.sent, S(s), s < 1e3 && O(!0), 1e16, A(1e16);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function U(e) {
                    return X.apply(this, arguments)
                }

                function X() {
                    return (X = c(i().mark((function e(t) {
                        var n, a, s, r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !h) {
                                        e.next = 27;
                                        break
                                    }
                                    if (!(t > 20)) {
                                        e.next = 5;
                                        break
                                    }
                                    return alert("Max 20 mints each time"), e.abrupt("return");
                                case 5:
                                    return e.next = 7, h.methods.totalSupply().call();
                                case 7:
                                    if (!(e.sent >= 6666)) {
                                        e.next = 11;
                                        break
                                    }
                                    return alert("Max minted already"), e.abrupt("return");
                                case 11:
                                    return n = 69e14, a = Number(n) * t, A(n), e.next = 16, h.methods.Mint(t).estimateGas({
                                        from: o,
                                        value: a
                                    });
                                case 16:
                                    return s = e.sent, console.log("estimated gas", s), console.log({
                                        from: o,
                                        value: a
                                    }), h.methods.Mint(t).send({
                                        from: o,
                                        value: a,
                                        gas: String(s)
                                    }).on("transactionHash", (function(e) {
                                        console.log("transactionHash", e)
                                    })), e.next = 22, h.methods.totalSupply().call();
                                case 22:
                                    r = e.sent, S(r), r < 1e3 && O(!0), e.next = 28;
                                    break;
                                case 27:
                                    console.log("Wallet not connected");
                                case 28:
                                    e.next = 34;
                                    break;
                                case 30:
                                    e.prev = 30, e.t0 = e.catch(0), alert("Not enough fund in your wallet"), console.log("Max 3 mint per wallet");
                                case 34:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 30]
                        ])
                    })))).apply(this, arguments)
                }
                return (0, p.useEffect)(c(i().mark((function e() {
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                q();
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), []), (0, s.jsxs)("div", {
                    id: "bodyy",
                    className: "flex flex-col items-center justify-center min-h-screen",
                    children: [(0, s.jsxs)(r.default, {
                        children: [(0, s.jsx)("title", {
                            children: "3Lander Mfers"
                        }), (0, s.jsx)("link", {
                            rel: "icon",
                            href: "/images/2.jpg"
                        }), (0, s.jsx)("meta", {
                            property: "og:title",
                            content: "3Lander Mfers"
                        }, "ogtitle"), (0, s.jsx)("meta", {
                            property: "og:description",
                            content: "where 3Landers and mfers come together. 3Landers Mfers by 3Landertoshi. 3Landers Mfers is a 5,555 unit collection that would make even dad proud (hopefully). The collection consists of over 150 unique hand drawn traits spanning various rarities with no two alike. 3Landers Mfers is in the public domain (cc0). Feel free to use your 3Landers mfer in any way you want. 10% of sales dropped to the mfer treasury."
                        }, "ogdesc"), (0, s.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }, "ogtype"), (0, s.jsx)("meta", {
                            property: "og:url",
                            content: "https://3LandersMfers.com/"
                        }, "ogurl"), (0, s.jsx)("meta", {
                            property: "og:image",
                            content: "/images/2.jpg"
                        }, "ogimage"), (0, s.jsx)("meta", {
                            property: "og:site_name",
                            content: "https://3LandersMfers.com"
                        }, "ogsitename"), (0, s.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }, "twcard"), (0, s.jsx)("meta", {
                            property: "twitter:domain",
                            content: "3Lander Mfers"
                        }, "twdomain"), (0, s.jsx)("meta", {
                            property: "twitter:url",
                            content: "https://twitter.com/3landersmfers"
                        }, "twurl"), (0, s.jsx)("meta", {
                            name: "twitter:title",
                            content: "3Lander Mfers"
                        }, "twtitle"), (0, s.jsx)("meta", {
                            name: "twitter:description",
                            content: "where 3Landers and mfers come together. 3Landers Mfers by 3Landertoshi. 3Landers Mfers is a 5,555 unit collection that would make even dad proud (hopefully). The collection consists of over 150 unique hand drawn traits spanning various rarities with no two alike. 3Landers Mfers is in the public domain (cc0). Feel free to use your 3Landers mfer in any way you want. 10% of sales dropped to the mfer treasury."
                        }, "twdesc"), (0, s.jsx)("meta", {
                            name: "twitter:image",
                            content: "/images/2.jpg"
                        }, "twimage")]
                    }), (0, s.jsxs)("div", {
                        className: " w-full min-h-screen",
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center justify-end w-full py-3 px-9",
                            children: [(0, s.jsx)("a", {
                                href: "https://twitter.com/3landersmfers",
                                className: "sm:text-xl m-3",
                                children: (0, s.jsx)("img", {
                                    src: "images/twitter.png",
                                    width: "30",
                                    alt: "",
                                    className: "logo-image "
                                })
                            }), (0, s.jsx)("a", {
                                href: "https://opensea.io/collection/3landers-mfers-official",
                                className: "sm:text-xl m-3",
                                children: (0, s.jsx)("img", {
                                    src: "images/opensea.png",
                                    width: "30",
                                    alt: "",
                                    className: "logo-image "
                                })
                            }), (0, s.jsx)("nav", {
                                className: "flex justify-between PixelFont",
                                children: t ? (0, s.jsx)("button", {
                                    onClick: function() {
                                        return W.apply(this, arguments)
                                    },
                                    className: "mt-4 text-2xl bg-secondary text-white px-8 py-2 rounded-full border-2 border-secondary hover:border-white RobotoMedium tracking-widest",
                                    children: "Wallet is Connected!"
                                }) : (0, s.jsx)("button", {
                                    onClick: q,
                                    className: "mt-4 text-2xl bg-secondary text-white px-8 py-2 rounded-full border-2 border-secondary hover:border-white RobotoMedium tracking-widest",
                                    children: "Connect Wallet First"
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "w-full flex flex-col justify-center items-center",
                            children: (0, s.jsxs)("article", {
                                className: "md:w-2/3 w-4/5 text-lg text-black RobotoMedium tracking-wider",
                                id: "about",
                                children: [(0, s.jsxs)("div", {
                                    className: " w-max mb-12",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-9xl RobotoBlack mb-2",
                                        children: "3Landers Mfers"
                                    }), (0, s.jsx)("img", {
                                        src: "images/banner.jpg",
                                        width: "90%"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "my-6 RobotoBold",
                                    children: "Where 3Landers and mfers come together. 10% of sales dropped to the mfer treasury.  "
                                }), (0, s.jsx)("p", {
                                    className: "my-6 RobotoBold",
                                    children: "3Landers Mfers is a 6,666 unit collection that would make even dad proud (hopefully). The collection is made by over 150 unique hand drawn traits."
                                }), (0, s.jsx)("p", {
                                    className: "my-6 RobotoBold",
                                    children: "3Landers Mfers is in the public domain (cc0). Feel free to use your 3Landers mfers in any way you want."
                                }), (0, s.jsx)("p", {
                                    className: "my-6 RobotoBold",
                                    children: "0.0069 ETH to mint, Max 20 per TX"
                                }), (0, s.jsxs)("div", {
                                    className: "my-6 RobotoBold",
                                    children: [j, "/6666 Minted"]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-wrap lg:flex-wrap items-center justify-start text-2xl RobotoBold",
                                    children: [(0, s.jsx)("span", {
                                        children: "Mint"
                                    }), (0, s.jsx)("input", {
                                        type: "number",
                                        min: "1",
                                        max: "20",
                                        value: b,
                                        onChange: function(e) {
                                            return w(e.target.value)
                                        },
                                        name: "",
                                        className: "mx-4 pl-2 text-2xl rounded text-black w-22 h-8 RobotoBold"
                                    }), (0, s.jsx)("span", {
                                        children: "3Landers Mfers!"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "my-8",
                                    children: (0, s.jsx)("button", {
                                        onClick: function() {
                                            return U(b)
                                        },
                                        className: "mt-4 text-2xl bg-secondary text-white px-8 py-2 rounded-full border-2 border-secondary hover:border-white RobotoMedium tracking-widest",
                                        children: "MINT"
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        46601: function() {},
        89214: function() {},
        71922: function() {},
        2363: function() {},
        27790: function() {},
        52361: function() {},
        94616: function() {},
        6567: function() {}
    },
    function(e) {
        e.O(0, [482, 9, 774, 888, 179], (function() {
            return t = 78581, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);