import { Component, OnInit } from "@angular/core";
import { Video } from "../video";
import { VIDEOS } from "../mock-videos";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"]
})
export class VideosComponent implements OnInit {
  videos = VIDEOS;
  video: Video;
  selectedVideo: Video;

  constructor() {}

  ngOnInit() {}
  onSelect(video: Video): void {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }
}
