(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{663:function(t,_,e){"use strict";e.r(_);var v=e(0),n=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("p",[e("strong",[t._v("NOTE")]),t._v(": This document is unmaintained and may be out of date!")]),t._v(" "),e("p",[t._v("The IBC module emits the following events. It can be expected that the type "),e("code",[t._v("message")]),t._v(",\nwith an attirbute key of "),e("code",[t._v("action")]),t._v(" will represent the first event for each message\nbeing processed as emitted by the SDK's baseapp. Each IBC TAO message will\nalso emit its module name in the format 'ibc_sub-modulename'.")]),t._v(" "),e("p",[t._v("All the events for the Channel handshakes, "),e("code",[t._v("SendPacket")]),t._v(", "),e("code",[t._v("RecvPacket")]),t._v(", "),e("code",[t._v("AcknowledgePacket")]),t._v(",\n"),e("code",[t._v("TimeoutPacket")]),t._v(" and "),e("code",[t._v("TimeoutOnClose")]),t._v(" will emit additional events not specified here due to\ncallbacks to IBC applications.")]),t._v(" "),e("h2",{attrs:{id:"ics-02-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ics-02-client"}},[t._v("#")]),t._v(" ICS 02 - Client")]),t._v(" "),e("h3",{attrs:{id:"msgcreateclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgcreateclient"}},[t._v("#")]),t._v(" MsgCreateClient")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("create_client")]),t._v(" "),e("td",[t._v("client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("create_client")]),t._v(" "),e("td",[t._v("client_type")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("create_client")]),t._v(" "),e("td",[t._v("consensus_height")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("create_client")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_client")])])])]),t._v(" "),e("h3",{attrs:{id:"msgupdateclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgupdateclient"}},[t._v("#")]),t._v(" MsgUpdateClient")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("update_client")]),t._v(" "),e("td",[t._v("client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("update_client")]),t._v(" "),e("td",[t._v("client_type")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("update_client")]),t._v(" "),e("td",[t._v("consensus_height")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("update_client")]),t._v(" "),e("td",[t._v("header")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("update_client")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_client")])])])]),t._v(" "),e("h3",{attrs:{id:"msgsubmitmisbehaviour"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgsubmitmisbehaviour"}},[t._v("#")]),t._v(" MsgSubmitMisbehaviour")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("client_misbehaviour")]),t._v(" "),e("td",[t._v("client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("client_misbehaviour")]),t._v(" "),e("td",[t._v("client_type")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("client_misbehaviour")]),t._v(" "),e("td",[t._v("consensus_height")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("client_misbehaviour")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("evidence")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("sender")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("submit_evidence")]),t._v(" "),e("td",[t._v("evidence_hash")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"updateclientproposal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updateclientproposal"}},[t._v("#")]),t._v(" UpdateClientProposal")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("update_client_proposal")]),t._v(" "),e("td",[t._v("client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("update_client_proposal")]),t._v(" "),e("td",[t._v("client_type")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("update_client_proposal")]),t._v(" "),e("td",[t._v("consensus_height")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"upgradeproposal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgradeproposal"}},[t._v("#")]),t._v(" UpgradeProposal")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("upgrade_client_proposal")]),t._v(" "),e("td",[t._v("title")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("upgrade_client_proposal")]),t._v(" "),e("td",[t._v("height")]),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"ics-03-connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ics-03-connection"}},[t._v("#")]),t._v(" ICS 03 - Connection")]),t._v(" "),e("h3",{attrs:{id:"msgconnectionopeninit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgconnectionopeninit"}},[t._v("#")]),t._v(" MsgConnectionOpenInit")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("connection_open_init")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_init")]),t._v(" "),e("td",[t._v("client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_init")]),t._v(" "),e("td",[t._v("counterparty_client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("connection_open_init")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_connection")])])])]),t._v(" "),e("h3",{attrs:{id:"msgconnectionopentry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgconnectionopentry"}},[t._v("#")]),t._v(" MsgConnectionOpenTry")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("connection_open_try")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_try")]),t._v(" "),e("td",[t._v("client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_try")]),t._v(" "),e("td",[t._v("counterparty_client_id")]),t._v(" "),e("td",[t._v("{counterparty.clientId")])]),t._v(" "),e("tr",[e("td",[t._v("connection_open_try")]),t._v(" "),e("td",[t._v("counterparty_connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("connection_open_try")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_connection")])])])]),t._v(" "),e("h3",{attrs:{id:"msgconnectionopenack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgconnectionopenack"}},[t._v("#")]),t._v(" MsgConnectionOpenAck")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("connection_open_ack")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_ack")]),t._v(" "),e("td",[t._v("client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_ack")]),t._v(" "),e("td",[t._v("counterparty_client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_ack")]),t._v(" "),e("td",[t._v("counterparty_connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_connection")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("connection_open_ack")])])])]),t._v(" "),e("h3",{attrs:{id:"msgconnectionopenconfirm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgconnectionopenconfirm"}},[t._v("#")]),t._v(" MsgConnectionOpenConfirm")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("connection_open_confirm")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_confirm")]),t._v(" "),e("td",[t._v("client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_confirm")]),t._v(" "),e("td",[t._v("counterparty_client_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("connection_open_confirm")]),t._v(" "),e("td",[t._v("counterparty_connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("connection_open_confirm")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_connection")])])])]),t._v(" "),e("h2",{attrs:{id:"ics-04-channel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ics-04-channel"}},[t._v("#")]),t._v(" ICS 04 - Channel")]),t._v(" "),e("h3",{attrs:{id:"msgchannelopeninit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgchannelopeninit"}},[t._v("#")]),t._v(" MsgChannelOpenInit")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("channel_open_init")]),t._v(" "),e("td",[t._v("port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_init")]),t._v(" "),e("td",[t._v("channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_init")]),t._v(" "),e("td",[t._v("counterparty_port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_init")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("channel_open_init")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_channel")])])])]),t._v(" "),e("h3",{attrs:{id:"msgchannelopentry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgchannelopentry"}},[t._v("#")]),t._v(" MsgChannelOpenTry")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("channel_open_try")]),t._v(" "),e("td",[t._v("port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_try")]),t._v(" "),e("td",[t._v("channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_try")]),t._v(" "),e("td",[t._v("counterparty_port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_try")]),t._v(" "),e("td",[t._v("counterparty_channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_try")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("channel_open_try")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_channel")])])])]),t._v(" "),e("h3",{attrs:{id:"msgchannelopenack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgchannelopenack"}},[t._v("#")]),t._v(" MsgChannelOpenAck")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("channel_open_ack")]),t._v(" "),e("td",[t._v("port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_ack")]),t._v(" "),e("td",[t._v("channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_ack")]),t._v(" "),e("td",[t._v("counterparty_port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_ack")]),t._v(" "),e("td",[t._v("counterparty_channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_ack")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("channel_open_ack")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_channel")])])])]),t._v(" "),e("h3",{attrs:{id:"msgchannelopenconfirm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgchannelopenconfirm"}},[t._v("#")]),t._v(" MsgChannelOpenConfirm")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("channel_open_confirm")]),t._v(" "),e("td",[t._v("port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_confirm")]),t._v(" "),e("td",[t._v("channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_confirm")]),t._v(" "),e("td",[t._v("counterparty_port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_confirm")]),t._v(" "),e("td",[t._v("counterparty_channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_open_confirm")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_channel")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("channel_open_confirm")])])])]),t._v(" "),e("h3",{attrs:{id:"msgchannelcloseinit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgchannelcloseinit"}},[t._v("#")]),t._v(" MsgChannelCloseInit")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("channel_close_init")]),t._v(" "),e("td",[t._v("port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_close_init")]),t._v(" "),e("td",[t._v("channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_close_init")]),t._v(" "),e("td",[t._v("counterparty_port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_close_init")]),t._v(" "),e("td",[t._v("counterparty_channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_close_init")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("channel_close_init")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_channel")])])])]),t._v(" "),e("h3",{attrs:{id:"msgchannelcloseconfirm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgchannelcloseconfirm"}},[t._v("#")]),t._v(" MsgChannelCloseConfirm")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("channel_close_confirm")]),t._v(" "),e("td",[t._v("port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_close_confirm")]),t._v(" "),e("td",[t._v("channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_close_confirm")]),t._v(" "),e("td",[t._v("counterparty_port_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_close_confirm")]),t._v(" "),e("td",[t._v("counterparty_channel_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("channel_close_confirm")]),t._v(" "),e("td",[t._v("connection_id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("channel_close_confirm")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc_channel")])])])]),t._v(" "),e("h3",{attrs:{id:"sendpacket-application-module-call"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sendpacket-application-module-call"}},[t._v("#")]),t._v(" SendPacket (application module call)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("send_packet")]),t._v(" "),e("td",[t._v("packet_data")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("send_packet")]),t._v(" "),e("td",[t._v("packet_timeout_height")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("send_packet")]),t._v(" "),e("td",[t._v("packet_timeout_timestamp")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("send_packet")]),t._v(" "),e("td",[t._v("packet_sequence")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("send_packet")]),t._v(" "),e("td",[t._v("packet_src_port")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("send_packet")]),t._v(" "),e("td",[t._v("packet_src_channel")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("send_packet")]),t._v(" "),e("td",[t._v("packet_dst_port")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("send_packet")]),t._v(" "),e("td",[t._v("packet_dst_channel")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("send_packet")]),t._v(" "),e("td",[t._v("packet_channel_ordering")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("application-module-defined-field")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc-channel")])])])]),t._v(" "),e("h3",{attrs:{id:"msgrecvpacket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgrecvpacket"}},[t._v("#")]),t._v(" MsgRecvPacket")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_data")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_ack")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_timeout_height")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_timeout_timestamp")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_sequence")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_src_port")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_src_channel")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_dst_port")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_dst_channel")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("recv_packet")]),t._v(" "),e("td",[t._v("packet_channel_ordering")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("recv_packet")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc-channel")])])])]),t._v(" "),e("h3",{attrs:{id:"msgacknowledgepacket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgacknowledgepacket"}},[t._v("#")]),t._v(" MsgAcknowledgePacket")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("acknowledge_packet")]),t._v(" "),e("td",[t._v("packet_timeout_height")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("acknowledge_packet")]),t._v(" "),e("td",[t._v("packet_timeout_timestamp")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("acknowledge_packet")]),t._v(" "),e("td",[t._v("packet_sequence")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("acknowledge_packet")]),t._v(" "),e("td",[t._v("packet_src_port")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("acknowledge_packet")]),t._v(" "),e("td",[t._v("packet_src_channel")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("acknowledge_packet")]),t._v(" "),e("td",[t._v("packet_dst_port")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("acknowledge_packet")]),t._v(" "),e("td",[t._v("packet_dst_channel")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("acknowledge_packet")]),t._v(" "),e("td",[t._v("packet_channel_ordering")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("acknowledge_packet")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc-channel")])])])]),t._v(" "),e("h3",{attrs:{id:"msgtimeoutpacket-msgtimeoutonclose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgtimeoutpacket-msgtimeoutonclose"}},[t._v("#")]),t._v(" MsgTimeoutPacket & MsgTimeoutOnClose")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Attribute Key")]),t._v(" "),e("th",[t._v("Attribute Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("timeout_packet")]),t._v(" "),e("td",[t._v("packet_timeout_height")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("timeout_packet")]),t._v(" "),e("td",[t._v("packet_timeout_timestamp")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("timeout_packet")]),t._v(" "),e("td",[t._v("packet_sequence")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("timeout_packet")]),t._v(" "),e("td",[t._v("packet_src_port")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("timeout_packet")]),t._v(" "),e("td",[t._v("packet_src_channel")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("timeout_packet")]),t._v(" "),e("td",[t._v("packet_dst_port")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("timeout_packet")]),t._v(" "),e("td",[t._v("packet_dst_channel")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("timeout_packet")]),t._v(" "),e("td",[t._v("packet_channel_ordering")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("action")]),t._v(" "),e("td",[t._v("timeout_packet")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("module")]),t._v(" "),e("td",[t._v("ibc-channel")])])])])])}),[],!1,null,null,null);_.default=n.exports}}]);