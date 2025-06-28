import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../config.cjs';
import axios from 'axios';

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}

// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Africa/Nairobi").format("HH:mm:ss");
const xdate = moment.tz("Africa/Nairobi").format("DD/MM/YYYY");
const time2 = moment().tz("Africa/Nairobi").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const menu = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const mode = config.MODE === 'public' ? 'public' : 'private';
  const pref = config.PREFIX;

  const validCommands = ['professeur', 'menu', 'bot'];

  if (validCommands.includes(cmd)) {
    const str = `╭∘━━➤ *𝐇𝐀𝐈𝐊𝐎-𝐌𝐃𝐗-𝐕𝟐*
┃╭•─────────────⊷
┃│❍ *ᴜsᴇʀ* : *${m.pushName}*
┃│❍ *ᴍᴏᴅᴇ* : *${mode}*
┃│❍ *ᴘʀᴇғɪx* : *[${prefix}]*
┃│❍ *ᴏᴡɴᴇʀ* : *${config.OWNER_NAME}*
┃│❍ *ᴘʟᴀᴛғᴏʀᴍ* : *${os.platform()}*
┃│❍ *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : *xᴛʀᴇᴍᴇ*
┃│❍ *ᴠᴇʀsɪᴏɴ* : *1.0.0*
┃╰•─────────────⊷
╰∘━━━━━━━━━━━━━━━━∘╯
> *ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡᴀ ʙᴏᴛ ʙʏ xᴛʀᴇᴍᴇ*
> *ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ*
> *╭⭑━━━━━➤*
> *┃* *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐌𝐄𝐍𝐔*
> *┣➢*  ғᴀᴄᴇʙᴏᴏᴋ
> *┣➢*  ᴍᴇᴅɪᴀғɪʀᴇ
> *┣➢*  ᴛɪᴋᴛᴏᴋ
> *┣➢*  ᴛᴡɪᴛᴛᴇʀ
> *┣➢*  ɪɴsᴛᴀ
> *┣➢*  ᴀᴘᴋ
> *┣➢*  ɪᴍɢ
> *┣➢*  ᴛᴛ2
> *┣➢*  ᴘɪɴs
> *┣➢*  ᴀᴘᴋ2
> *┣➢*  ғʙ2
> *┣➢*  ᴘɪɴᴛᴇʀᴇsᴛ
> *┣➢*  sᴘᴏᴛɪғʏ
> *┣➢*  ᴘʟᴀʏ
> *┣➢*  ᴘʟᴀʏ2
> *┣➢*  ᴀᴜᴅɪᴏ
> *┣➢*  ᴠɪᴅᴇᴏ
> *┣➢*  ᴠɪᴅᴇᴏ2
> *┣➢*  ʏᴛᴍᴘ3
> *┣➢*  ʏᴛᴍᴘ4
> *┣➢*  sᴏɴɢ
> *┣➢*  ᴅᴀʀᴀᴍᴀ
> *┣➢* ɢᴅʀɪᴠᴇ
> *┣➢*  ssᴡᴇʙ
> *┣➢*  ᴛɪᴋs
> *╰⭑━━➤* *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤*
> *┃* *𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒𝐌𝐄𝐍𝐔*
> *┣➢*  ʙᴜʟʟʏ 
> *┣➢*  ᴄᴜᴅᴅʟᴇ 
> *┣➢*  ᴄʀʏ 
> *┣➢*  ʜᴜɢ
> *┣➢*  ᴀᴡᴏᴏ 
> *┣➢*  ᴋɪss 
> *┣➢*  ʟɪᴄᴋ 
> *┣➢*  ᴘᴀᴛ 
> *┣➢*  sᴍᴜɢ 
> *┣➢*  ʙᴏɴᴋ 
> *┣➢*  ʜɪɢʜғɪᴠᴇ 
> *┣➢*  ʜᴀɴᴅʜᴏʟᴅ 
> *┣➢*  ɴᴏᴍ 
> *┣➢*  ʙɪᴛᴇ 
> *┣➢*  ɢʟᴏᴍᴘ 
> *┣➢*  sʟᴀᴘ 
> *┣➢*  ᴋɪʟʟ 
> *┣➢*  ʜᴀᴘᴘʏ 
> *┣➢*  ᴡɪɴᴋ 
> *┣➢*  ᴘᴏᴋᴇ 
> *┣➢*  ᴅᴀɴᴄᴇ 
> *┣➢*  ᴄʀɪɴɢᴇ 
> *╰⭑━━➤* *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤* 
> *┃* *𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔*
> *┣➢*  ɢʀᴏᴜᴘʟɪɴᴋ
> *┣➢*  ᴋɪᴄᴋᴀʟʟ
> *┣➢*  ᴋɪᴄᴋᴀʟʟ2
> *┣➢*  ᴋɪᴄᴋᴀʟʟ3
> *┣➢*  ᴀᴅᴅ
> *┣➢*  ᴀɴᴛɪsᴘᴀᴍ
> *┣➢*  ᴀɴᴛɪʙᴏᴛ
> *┣➢*  ᴀɴᴛɪᴍᴇɴᴛɪᴏɴ
> *┣➢*  ʀᴇᴍᴏᴠᴇ
> *┣➢*  ᴋɪᴄᴋ
> *┣➢*  ᴘʀᴏᴍᴏᴛᴇ
> *┣➢*  ᴅᴇᴍᴏᴛᴇ 
> *┣➢*  ᴅɪsᴍɪss 
> *┣➢*  ʀᴇᴠᴏᴋᴇ 
> *┣➢*  sᴇᴛɢᴏᴏᴅʙʏᴇ 
> *┣➢*  sᴇᴛᴡᴇʟᴄᴏᴍᴇ 
> *┣➢*  ᴅᴇʟᴇᴛᴇ 
> *┣➢*  ɢᴇᴛᴘɪᴄ 
> *┣➢*  ɢɪɴғᴏ 
> *┣➢*  ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ 
> *┣➢*  ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ
> *┣➢*  ᴅɪsᴀᴘᴘᴇᴀʀ 7D,24H
> *┣➢*  ᴀʟʟʀᴇǫ
> *┣➢*  ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ
> *┣➢*  ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ
> *┣➢*  ᴊᴏɪɴʀᴇǫᴜᴇsᴛs
> *┣➢*  sᴇɴᴅᴅᴍ
> *┣➢*  ɴɪᴋᴀʟ
> *┣➢*  ᴍᴜᴛᴇ
> *┣➢*  ᴜɴᴍᴜᴛᴇ
> *┣➢*  ʟᴏᴄᴋɢᴄ
> *┣➢*  ᴜɴʟᴏᴄᴋɢᴄ
> *┣➢*  ɪɴᴠɪᴛᴇ
> *┣➢*  ᴛᴀɢ
> *┣➢*  ʜɪᴅᴇᴛᴀɢ
> *┣➢*  ᴛᴀɢᴀʟʟ
> *┣➢*  ᴛᴀɢᴀᴅᴍɪɴs
> *╰⭑━━➤* *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤*
> *┃* *𝐋𝐎𝐆𝐎𝐌𝐀𝐊𝐄𝐑*
> *┣➢*  ɴᴇᴏɴʟɪɢʜᴛ
> *┣➢*  ʙʟᴀᴄᴋᴘɪɴᴋ
> *┣➢*  ᴅʀᴀɢᴏɴʙᴀʟʟ
> *┣➢*  3 ᴅᴄᴏᴍɪᴄ
> *┣➢*  ᴀᴍᴇʀɪᴄᴀ
> *┣➢*  ɴᴀʀᴜᴛᴏ
> *┣➢*  sᴀᴅɢɪʀʟ
> *┣➢*  ᴄʟᴏᴜᴅs
> *┣➢*  ғᴜᴛᴜʀɪsᴛɪᴄ
> *┣➢*  3ᴅᴘᴀᴘᴇʀ
> *┣➢*  ɢᴀʟᴀxʏ
> *┣➢*  sᴀɴs
> *┣➢*  ʙᴏᴏᴍ
> *┣➢*  ʜᴀᴄᴋᴇʀ
> *┣➢*  ᴅᴇᴠɪʟᴡɪɴɢs
> *┣➢*  ɴɪɢᴇʀɪᴀ
> *┣➢*  ʙᴜʟʙ
> *┣➢*  ᴛʏᴘᴏɢʀᴀᴘʜʏ
> *┣➢*  ʙɪʀᴛʜᴅᴀʏ
> *╰⭑━━➤* *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤*
> *┃* *𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔*
> *┣➢*  ᴏᴡɴᴇʀ
> *┣➢*  ᴍᴇɴᴜ
> *┣➢*  ᴍᴇɴᴜ2
> *┣➢*  ᴠᴠ
> *┣➢*  ᴄʜᴀᴛʙᴏᴛ
> *┣➢*  ᴘʜᴏᴛᴏ
> *┣➢*  ᴀɴᴛɪᴄᴀʟʟ
> *┣➢*  ʟɪsᴛᴄᴍᴅ
> *┣➢*  ᴀʟʟᴍᴇɴᴜ
> *┣➢*  ʀᴇᴘᴏ
> *┣➢*  ʙʟᴏᴄᴋ
> *┣➢*  ᴜɴʙʟᴏᴄᴋ
> *┣➢*  ғᴜʟʟᴘᴘ
> *┣➢*  sᴇᴛᴘᴘ
> *┣➢*  ᴛᴛᴛ
> *┣➢*  ʀᴇsᴛᴀʀᴛ
> *┣➢*  sʜᴜᴛᴅᴏᴡɴ
> *┣➢*  ᴜᴘᴅᴀᴛᴇᴄᴍᴅ
> *┣➢*  ᴀʟɪᴠᴇ
> *┣➢*  ᴘɪɴɢ
> *┣➢*  ᴊɪᴅ
> *╰⭑━━➤* *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤*
> *┃* *𝐅𝐔𝐍𝐌𝐄𝐍𝐔*
> *┣➢*  sʜᴀᴘᴀʀ
> *┣➢*  ʀᴀᴛᴇ
> *┣➢*  ɪɴsᴜʟᴛ
> *┣➢*  ʜᴀᴄᴋ
> *┣➢*  sʜɪᴘ
> *┣➢*  ᴄʜᴀʀᴀᴄᴛᴇʀ
> *┣➢*  ᴘɪᴄᴋᴜᴘ
> *┣➢*  ᴊᴏᴋᴇ
> *┣➢*  ʜʀᴛ
> *┣➢*  ʜᴘʏ
> *┣➢*  sʏᴅ
> *┣➢*  ᴀɴɢᴇʀ
> *┣➢*  sʜʏ
> *┣➢*  ᴋɪss
> *┣➢*  ʜᴏʟᴅ
> *┣➢*  ʜᴜɢ
> *┣➢*  ɴɪᴋᴀʟ
> *┣➢*  ʜɪғɪ
> *┣➢*  ᴘᴏᴋᴇ
> *╰⭑━━➤* *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤* 
> *┃* *𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐌𝐄𝐍𝐔*
> *┣➢*  sᴛɪᴄᴋᴇ
> *┣➢*  ᴇᴍᴏᴊɪᴍɪx
> *┣➢*  ғᴀɴᴄʏ
> *┣➢*  ᴛᴀᴋᴇ
> *┣➢*  ᴛᴏᴍᴘ3
> *┣➢*  ᴛᴛs
> *┣➢*  ᴛʀᴛ
> *┣➢*  ʙᴀsᴇ64
> *┣➢*  ᴜɴʙᴀsᴇ64
> *┣➢*  ʙɪɴᴀʀʏ
> *┣➢*  ᴅʙɪɴᴀʀʏ
> *┣➢*  ᴛɪɴʏᴜʀʟ
> *┣➢*  ᴜʀʟᴅᴇᴄᴏᴅᴇ
> *┣➢*  ᴜʀʟ
> *┣➢*  ʀᴇᴘᴇᴀᴛ
> *┣➢*  ᴀsᴋ
> *┣➢*  ʀᴇᴀᴅᴍᴏʀᴇ
> *╰⭑━━➤* *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤* 
> *┃* *𝐀𝐈𝐌𝐄𝐍𝐔*
> *┣➢*  ᴀɪ
> *┣➢*  ɢᴘᴛ3
> *┣➢*  ɢᴘᴛᴍɪɴɪ
> *┣➢* ʜᴀɪᴋᴏ
> *┣➢*  ᴍᴇᴛᴀ
> *┣➢*  ʙʟᴀᴄᴋʙᴏx
> *┣➢*  ʟᴜᴍᴀ
> *┣➢*  ᴅᴊ
> *┣➢*  ʜᴀɪᴋᴏ
> *┣➢*  ᴘʀᴏғ
> *┣➢*  ɢᴘᴛ4
> *┣➢*  ʙɪɴɢ
> *┣➢*  ɪᴍᴀɢɪɴᴇ
> *┣➢*  ɪᴍᴀɢɪɴᴇ2
> *┣➢*  ᴄᴏᴘɪʟᴏᴛ
> *╰⭑━━➤* *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤* 
> *┃* *𝐌𝐀𝐈𝐍𝐌𝐄𝐍𝐔*
> *┣➢*  ᴘɪɴɢ
> *┣➢*  ᴘɪɴɢ2
> *┣➢*  sᴘᴇᴇᴅ
> *┣➢*  ʟɪᴠᴇ
> *┣➢*  ᴀʟɪᴠᴇ
> *┣➢*  ʀᴜɴᴛɪᴍᴇ
> *┣➢*  ᴜᴘᴛɪᴍᴇ
> *┣➢*  ʀᴇᴘᴏ
> *┣➢*  ᴏᴡɴᴇʀ
> *┣➢*  ᴍᴇɴᴜ
> *┣➢*  ᴍᴇɴᴜ2
> *┣➢*  ʀᴇsᴛᴀʀᴛ
> *╰⭑━━➤* *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤* 
> *┃* *𝐀𝐍𝐈𝐌𝐄𝐌𝐄𝐍𝐔*
> *┣➢*  ғᴀᴄᴋ
> *┣➢*  ᴛʀᴜᴛʜ
> *┣➢*  ᴅᴀʀᴇ
> *┣➢*  ᴅᴏɢ
> *┣➢*  ᴀᴡᴏᴏ
> *┣➢*  ɢᴀʀʟ
> *┣➢*  ᴡᴀɪғᴜ
> *┣➢*  ɴᴇᴋᴏ
> *┣➢*  ᴍᴇɢɴᴜᴍɪɴ
> *┣➢*  ɴᴇᴋᴏ
> *┣➢*  ᴍᴀɪᴅ
> *┣➢*  ʟᴏʟɪ
> *┣➢*  ᴀɴɪᴍᴇɢɪʀʟ
> *┣➢*  ᴀɴɪᴍᴇɴᴇᴡs
> *┣➢*  ғᴏxɢɪʀʟ
> *┣➢*  ɴᴀʀᴜᴛᴏ
> *╰⭑━━➤*  *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*

> *╭⭑━━━━━➤* 
> *┃* *𝐎𝐓𝐇𝐄𝐑𝐌𝐄𝐍𝐔*
> *┣➢*  ᴛɪᴍᴇɴᴏᴡ
> *┣➢*  ᴅᴀᴛᴇ
> *┣➢*  ᴄᴏᴜɴᴛ
> *┣➢*  ᴄᴀʟᴄᴜʟᴀᴛᴇ
> *┣➢*  ᴄᴏᴜɴᴛx
> *┣➢*  ғʟɪᴘ
> *┣➢*  ᴄᴏɪɴғʟɪᴘ
> *┣➢*  ʀᴄᴏʟᴏʀ
> *┣➢*  ʀᴏʟʟ
> *┣➢*  ғᴀᴄᴛ
> *┣➢*  ᴄᴘᴘ
> *┣➢*  ʀᴡ
> *┣➢*  ᴘᴀɪʀ
> *┣➢*  ʟᴏɢᴏ <ᴛᴇxᴛ>
> *┣➢*  ᴅᴇғɪɴᴇ
> *┣➢*  ɴᴇᴡs
> *┣➢*  ᴍᴏᴠɪᴇ
> *┣➢*  ᴡᴇᴀᴛʜᴇʀ
> *┣➢*  sʀᴇᴘᴏ
> *┣➢*  ɪɴsᴜʟᴛ
> *┣➢*  sᴀᴠᴇ
> *┣➢*  ᴡɪᴋɪᴘᴇᴅɪᴀ
> *┣➢*  ɢᴘᴀss
> *┣➢*  ɢɪᴛʜᴜʙsᴛᴀʟᴋ
> *┣➢*  ʏᴛs
> *┣➢*  ʏᴛᴠ
> *╰⭑━━➤*  *𝚆𝙰 𝙱𝙾𝚃 𝟸𝟶𝟸𝟻-𝟸𝟶𝟸𝟼*
> *${config.DESCRIPTION}*`;

    // Check if MENU_IMAGE exists in config and is not empty
    let menuImage;
    if (config.MENU_IMAGE && config.MENU_IMAGE.trim() !== '') {
      try {
        // Try to fetch the image from URL
        const response = await axios.get(config.MENU_IMAGE, { responseType: 'arraybuffer' });
        menuImage = Buffer.from(response.data, 'binary');
      } catch (error) {
        console.error('Error fetching menu image from URL, falling back to local image:', error);
        menuImage = fs.readFileSync('https://files.catbox.moe/bqwb91.jpg');
      }
    } else {
      // Use local image if MENU_IMAGE is not configured
      menuImage = fs.readFileSync('https://files.catbox.moe/bqwb91.jpg');
    }

    await Matrix.sendMessage(m.from, {
      image: menuImage,
      caption: str,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363398101781980@newsletter',
          newsletterName: "𝐇𝐀𝐈𝐊𝐎-𝐌𝐃𝐗-𝐕𝟏🪀",
          serverMessageId: 143
        }
      }
    }, {
      quoted: m
    });

    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://files.catbox.moe/rvfjap.mp3' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
};

export default menu;

