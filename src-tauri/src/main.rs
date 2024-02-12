// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::{Command};
use std::str;
use std::env;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn download(location: String) -> String {
    let output = Command::new("curl")
        .arg("-o")
        .arg("ApplioV3.0.6.zip")
        .arg("-#")
        .arg("https://huggingface.co/IAHispano/Applio/resolve/main/Applio%20V3%20Precompiled/ApplioV3.0.6.zip?download=true")
        .current_dir(location)
        .output()
        .expect("Error executing the command.");

    let stdout = String::from_utf8_lossy(&output.stdout);
    let stderr = String::from_utf8_lossy(&output.stderr);

    let combined_output = format!("{} {}", stdout, stderr);

    combined_output
}

#[tauri::command]
fn get_current_dir() -> Option<String> {
  match env::current_dir() {
      Ok(current_dir) => Some(current_dir.to_string_lossy().into_owned()),
      Err(_) => None,
  }
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, download, get_current_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
