const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');
class CourseController {

    //GET / courses/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show',{course: mongooseToObject(course)});
            })
            .catch(next);
    }


    //GET / courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    
    //POST / courses/store
    store(req, res, next) {
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
        const course = new Course(req.body);
        course.save()
        .then(() => res.redirect(`/me/stored/courses`))
        .catch(error => {
            
        });
    }
    //GET / courses/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);
    }

    update(req, res, next){
        Course.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
          res.redirect("/me/stored/courses");
        })
        .catch(next);
    }

    delete(req, res, next){
        Course.delete({ _id: req.params.id })
        .then(() =>  res.redirect('back'))
        
        .catch(next);
    }

    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
        .then(() =>  res.redirect('back'))
        
        .catch(next);
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
        .then(() =>  res.redirect('back'))
        
        .catch(next);
    }
   
}

module.exports = new CourseController();