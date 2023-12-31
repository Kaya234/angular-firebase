import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Course } from 'src/app/shared/course.model';


@Injectable( { providedIn: 'root' })
export class CoursesService {


  constructor(private afs : AngularFirestore) {}

getCourses(): Observable<Course[]> {
  const courseCollection = this.afs.collection<Course>("courses")
  .snapshotChanges()
  .pipe(
    map((actions) => {
      return actions.map((res) => ({
        ...res.payload.doc.data(),
        id: res.payload.doc.id,
      }));
    })
  );
return courseCollection;
}

getCourse(id: string): Observable<Course | undefined> {
  const singleCourse = this.afs.collection<Course>("courses").doc(id)
      .valueChanges();
      return singleCourse;
  }

}
